import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from "../components/Api.js";
import PopupDeleteCard from "../components/PopupDeleteCard";

import {
  initialCards,
  config,
  popupEdit,
  openPopupButton,
  popupNewCards,
  popupNameUser,
  popupAboutUser,
  profileAddButton,
} from '../utils/constants.js';


/* ----------- Карточки с изображениями ----------- */




const addNewCard = new PopupWithForm({
  popupSelector: '.popup_new-card',
  handleFormSubmit: (formData) => {
    addNewCard.loading(true);
    api.addCard(formData)
      .then((formData) => {
        cardsList.addItem(createCard(formData));
        addNewCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addNewCard.loading(false);
      });
  }
});

addNewCard.setEventListeners();
openPopupButton.addEventListener('click', () => {
  validatorNewCard.toggleButtonState();
  popupNewCards.open();
})
const popupWithImage = new PopupWithImage('.popup_image',);

popupWithImage.setEventListeners();


const validatorNewCard = new FormValidator(config, popupNewCards);
validatorNewCard.enableValidation();

// создаем элемент карточки и возвращаем саму карточку
function createCard(data) {
  const card = new Card(
    {data: data, templateSelector:'.card-template', userId: userId, 
    handleCardClick: (name, link) => {
      popupWithImage.open({ name, link });
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.setCardObject(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }

    });
  const cardElement = card.generateCard();
  return cardElement;
}; 

// Создание экземпляра класса Section
const cardsList = new Section({
  renderer: (card) => {
    cardsList.addItem(createCard(card));
  },
}, '.elements__container');

//cardsList.renderItems();

// Создаем попап с подтверждением удаления карточки
const deleteCardPopup = new PopupDeleteCard({
  popupSelector: '.popup_delete-card'
});
deleteCardPopup.setEventListeners();

// нажатие на кнопку добавления новой карточки
profileAddButton.addEventListener('click', () => {
  validatorNewCard.resetValidation();
  addNewCard.open();
});


/* -------------- Профиль юзера --------------- */
//окно редактирования профиля
const userInfo = new UserInfo({
  dataName: '.profile__title',
  dataDescription: '.profile__subtitle',
  avatar: '.profile__avatar'
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit', 
  submiteditForm: (dataForm) =>{
popupEditProfile.loading(true);
api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.loading(false);
      });
  }
});
popupEditProfile.setEventListeners();


function submiteditForm(data) {
  userInfo.setUserInfo(data);
  popupEditProfile.close();
}



// нажатие на кнопку редактирования
openPopupButton.addEventListener('click', () => {

  popupEditProfile.open();
  validatorEditProfile.resetValidation();

  const { name, description } = userInfo.getUserInfo();

  popupNameUser.value = name;
  popupAboutUser.value = description;


});



//валидация форм

const validatorEditProfile = new FormValidator(config, popupEdit);
validatorEditProfile.enableValidation();




/* ---------- API ----------- */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: 'dbb1bb43-1b72-40d9-a456-fa264cdb846f',
    'Content-Type': 'application/json'
  }
})
//let userId;

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

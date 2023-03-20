import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from "../components/Api.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";


import {
  config,
  popupEdit,
  openPopupButton,
  popupNewCards,
  popupNameUser,
  popupAboutUser,
  profileAddButton,
  popupAvatar,
  buttonAvatar,
  avatar,
  popupDelete
}
  from '../utils/constants.js';

/* ---------- API ----------- */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: 'dbb1bb43-1b72-40d9-a456-fa264cdb846f',
    'Content-Type': 'application/json'
  }
})
let userId;

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    renderCard.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// попапы -------------------------------

// Создание попапа редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();

// Обработчик кнопки Edit аватара пользователя
buttonAvatar.addEventListener('click', () => {
  AvatarValidator.resetValidation();
  editAvatarPopup.open();
});

// Обработчик кнопки Edit попапа редактирования профиля
openPopupButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillInFormInputs({
    name: info.name,
    description: info.description
  });
  popupEditProfile.open();
  validatorEditProfile.resetValidation();

});


const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (data) => {
    popupEditProfile.loading(true);
    api.editUserInfo(data.name, data.description)
      .then(result => {
        userInfo.setUserInfo(result.name, result.description);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupEditProfile.loading(false);
      });
  }
});
popupEditProfile.setEventListeners();
//Заносим данные в форму попапа редактирования профиля
function fillInFormInputs({ name, description }) {
  popupNameUser.value = name;
  popupAboutUser.value = description;
}





/* -------------- Профиль юзера --------------- */
//окно редактирования профиля
const userInfo = new UserInfo({
  name: '.profile__title',
  description: '.profile__subtitle',
  avatar: '.profile__avatar'
});


const popupWithImage = new PopupWithImage('.popup_image',);

popupWithImage.setEventListeners();



/* ----------- Карточки с изображениями ----------- */


// создаем элемент карточки и возвращаем саму карточку
const createCard = (data) => {
  const card = new Card({
    data: data,
    cardSelector: '.card-template',
    userId: userId,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
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
const renderCard = new Section({
  renderer: (card) => {
    renderCard.addItem(createCard(card));
  },
}, '.elements__container');


// Создаем попап с подтверждением удаления карточки
const deleteCardPopup = new PopupDeleteCard({
  popupSelector: '.popup_delete-card',
  handleFormSubmit: (cardId) => {
    deleteCardPopup.setCardObject(() => {
      api.deleteCard(cardId)
        .then(() => {
          deleteCardPopup.cardId().remove();
          deleteCardPopup.close();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    });
  },
})

deleteCardPopup.setEventListeners();

// создание попапа с формой добавления новой карточки
const addNewCard = new PopupWithForm({
  popupSelector: '.popup_new-card',
  handleFormSubmit: (formData) => {
    addNewCard.loading(true);
    api.addCard(formData)
      .then((formData) => {
        renderCard.addItem(createCard(formData));
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


// нажатие на кнопку добавления новой карточки
profileAddButton.addEventListener('click', () => {
  validatorNewCard.resetValidation();
  addNewCard.open();
});


const validatorNewCard = new FormValidator(config, popupNewCards);
validatorNewCard.enableValidation();
const AvatarValidator = new FormValidator(config, popupAvatar);
AvatarValidator.enableValidation();
const validatorEditProfile = new FormValidator(config, popupEdit);
validatorEditProfile.enableValidation();




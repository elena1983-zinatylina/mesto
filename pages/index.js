
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  config,
  popup,
  popupEdit,
  openPopupButton,
  popupNewCards,
  popupProfile,
  popupNameUser,
  profileTitle,
  popupAboutUser,
  profileSubtitle,
  cardsContainer,
  profileAddButton,
  popupSubmitButton,
  popupLinkImages,
  popupPlaceName,
  popupAddForm,
  popupImage,
  popupFigureCaption,
  popupFigureImage,
  closeImgButton,
  cardTemplate,
  popups,
} from '../utils/constants.js';



/* Открытие и закрытие попапа */
const popupWithImage = new PopupWithImage('.popup_image', popupFigureImage, popupFigureCaption);

popupWithImage.setEventListeners();

// фун-ция открытия большрй картинки
function handleCardClick() {
  popupWithImage.open(this.getNameImage(), this.getLinkImage())
};

// карточки
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
      const newCard = createNewCard(item);
      cardList.addItem(newCard);
    }
  },
  '.elements__container'
);

cardList.renderItems();


const generateNewCard = new PopupWithForm('.popup_new-card', (data) => {
  const newCard = createNewCard(data);
  cardList.addItem(newCard);
});

generateNewCard.setEventListeners();

// создаем элемент карточки и возвращаем саму карточку
function createNewCard(data) {
  const card = new Card(data, '.card-template', handleCardClick); // экземпляр карточки
  const cardElement = card.generateCard();  // создаем карточку

  return cardElement; // возвращаем созданную карточку
};


// нажатие на кнопку добавления новой карточки
profileAddButton.addEventListener('click', () => {
  validatorNewCard.resetValidation();
  generateNewCard.open();
});

// ------------------------окно редактирования--------------------------

const popupEditProfile = new PopupWithForm('.popup_edit', submitForm);

popupEditProfile.setEventListeners();

const userInfo = new UserInfo({
  dataName: '.popup__input_user_name',
  dataDescription: '.popup__input_user_about',
});

//функция отправки на сервер редактированного профиля
function submitForm (data) {
  userInfo.setUserInfo(data);
  popupEditProfile.close();
};

// нажатие на кнопку редактирования
openPopupButton.addEventListener('click', () => {
  validatorEditProfile.resetValidation();
  const {name, description} = userInfo.getUserInfo();

  popupNameUser.value = name;
  popupAboutUser.value = description;

  popupEditProfile.open();
});

// ------------------------валидация форм--------------------------

const validatorEditProfile = new FormValidator(config, popupEdit);
validatorEditProfile.enableValidation();

const validatorNewCard = new FormValidator(config, popupNewCards);
validatorNewCard.enableValidation();

// ------------------------окно редактирования--------------------------
/*function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', setEscListener);

}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', setEscListener);
}

// Функция закрытия по кнопке Escape
const setEscListener = function (evt) {
  if (evt.key === esc) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const validatorEditProfile = new FormValidator(config, popupEdit); //создали экземпляр
validatorEditProfile.enableValidation(); //включили валидацию 1 раз
/* Открытие попапа по кнопке EdetButton*/
/*openPopupButton.addEventListener('click', function () {
  popupNameUser.value = profileTitle.textContent;
  popupAboutUser.value = profileSubtitle.textContent;

  openPopup(popupEdit);
  //popupProfile.reset();
  validatorEditProfile.resetValidation // сбрасываем валидацию
});


//объединить обработчики оверлея и крестиков
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  });
});

//oтправка формы
function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = popupNameUser.value;
  profileSubtitle.textContent = popupAboutUser.value;

  closePopup(popupEdit);

}

popupProfile.addEventListener('submit', submitForm)


const popupsElementsConfig = {
  popupImageSelector: '.popup_image'
}

const popupWithImage = new PopupWithImage(popupsElementsConfig.popupImageSelector, popupsElementsConfig);
popupWithImage.setEventListeners();

/* Добавления карточек при загрузке страницы*/
/*initialCards.forEach(function (item) {
  const cardElement = createCard(item);
  cardsContainer.prepend(cardElement)
})




function createCard(item) {
  const cardTemplate = new Card('.card-template', item.name, item.link,
  function handleCardClick(name, link) {
    popupWithImage.open(name, link)
  });
  const cardElement = cardTemplate.generateCard();
  return cardElement
}

const cardList = new Section ({
items: initialCards,
renderer: (item)=> {
cardList.addItem(createCard(item))}
}, cardConfig.imageElementContainerSelector);
cardList. renderItems();



//добавление новых карточек
function submitFormNewCard(event) {

  event.preventDefault();

  const newCard = {
    name: popupPlaceName.value,
  link: popupLinkImages.value,
 };
  cardsContainer.prepend(createCard(newCard))
  closePopup(popupNewCards);

};

const validatorNewCard = new FormValidator(config, popupNewCards); //создали экземпляр
validatorNewCard.enableValidation();//включили валидацию 1 раз
//кнопка открытия попап новой карточки
profileAddButton.addEventListener('click', () => {
  openPopup(popupNewCards);
  popupAddForm.reset();
  validatorNewCard.resetValidation // сбрасываем валидацию
});
 
popupAddForm.addEventListener('submit', submitFormNewCard);




export { openPopup, closePopup };










*/

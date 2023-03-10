import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

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



const popupWithImage = new PopupWithImage('.popup_image',);

popupWithImage.setEventListeners();


const handleCardClick = (name, link) => {
  popupWithImage.open({ name, link });
}
// карточки
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  }
},
  '.elements__container'
);

cardList.renderItems();


const addNewCard = new PopupWithForm('.popup_new-card', (data) => {
  const newCard = createCard(data);
  cardList.addItem(newCard);
});

addNewCard.setEventListeners();


// создаем элемент карточки и возвращаем саму карточку
function createCard(data) {
  const card = new Card(data, '.card-template', handleCardClick);
  return card.generateCard();
}; 


// нажатие на кнопку добавления новой карточки
profileAddButton.addEventListener('click', () => {
  validatorNewCard.resetValidation();
  addNewCard.open();
});

//окно редактирования профиля
const userInfo = new UserInfo({
  dataName: '.profile__title',
  dataDescription: '.profile__subtitle',
});

const popupEditProfile = new PopupWithForm('.popup_edit', submiteditForm);
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

const validatorNewCard = new FormValidator(config, popupNewCards);
validatorNewCard.enableValidation();


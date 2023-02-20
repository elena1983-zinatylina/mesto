import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: 'Имеритинский пляж',
    link: 'https://mobimg.b-cdn.net/v3/fetch/34/34c098c8bd4e0f075048012ca31331a8.jpeg'
  },
  {
    name: 'Атамань',
    link: 'https://www.visit-crimea.com/userfiles/Image/tour/336/336-285efc6a.jpg'
  },
  {
    name: 'Краснодар',
    link: 'https://barcaffe.ru/wp-content/uploads/2022/01/02_parkkrasnodar.jpg'
  },
  {
    name: 'Кубанское поле',
    link: 'https://www.lesmotspositifs.com/wp-content/uploads/2021/06/olia-nayda-9KQVWzSmd3I-unsplash-e1622987632460-1024x815.jpg'
  },
  {
    name: 'Темрюк',
    link: 'https://zakazposterov.ru/fotooboi/z/4e61e26ac4bb7258c0c8fb2c3ea70391_z.jpg'
  },
  {
    name: 'Водопады Руфабго',
    link: 'https://onlyl.ru/wp-content/uploads/2013/07/40-minut-hodbyi-ot-doma.1.jpg'
  }
];

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const openPopupButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__info_profile');
const popupNameUser = document.querySelector('.popup__input_user_name');
const profileTitle = document.querySelector('.profile__title');
const popupAboutUser = document.querySelector('.popup__input_user_about');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.elements__container');
const profileAddButton = document.querySelector('.profile__add-button');
const popupSubmitButton = document.querySelector('.popup__submit-button');
const popupNewCards = document.querySelector('.popup_new-card');
const popupLinkImages = popupNewCards.querySelector('.popup__input_link-images');
const popupPlaceName = popupNewCards.querySelector('.popup__input_plase-name');
const popupAddForm = popupNewCards.querySelector('.popup__info_new-card');
//const popupAddCard = document.querySelector('.popup__info');
const cardTemplate = document
  .querySelector('.card-template')
  .content
  .querySelector('.card');
const esc = 'Escape';
const popups = document.querySelectorAll('.popup');

const config = {
  formSelector: '.popup__info',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_notactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

/* Открытие и закрытие попапа */
function openPopup(popup) {
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

/* Открытие попапа по кнопке EdetButton и AddButton*/
openPopupButton.addEventListener('click', function () {
  popupNameUser.value = profileTitle.textContent;
  popupAboutUser.value = profileSubtitle.textContent;

  openPopup(popupEdit);
});

profileAddButton.addEventListener('click', function () {
  openPopup(popupNewCards);
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



/* перебора массива с карточками и добавление карточек из коробки*/
initialCards.forEach(function (card) {
  renderCard(card.link, card.name);
})

function renderCard(link, name) {
  const cardTemplate = new Card('.card-template', name, link);

  cardsContainer.prepend(cardTemplate.generateCard());
}

//добавление новых карточек
function submitFormNewCard(event) {

  event.preventDefault();

  renderCard(popupLinkImages.value, popupPlaceName.value);
 
  popupAddForm.reset();
  closePopup(popupNewCards);
  popupSubmitButton.disabled = true;
  
};

popupAddForm.addEventListener('submit', submitFormNewCard);


const validator = new FormValidator (config, popupAddForm);
validator.enableValidation();



export { openPopup, closePopup };












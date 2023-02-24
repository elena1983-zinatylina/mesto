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

const validatorEditProfile = new FormValidator(config, popupEdit); //создали экземпляр
validatorEditProfile.enableValidation(); //включили валидацию 1 раз
/* Открытие попапа по кнопке EdetButton*/
openPopupButton.addEventListener('click', function () {
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

/* Добавления карточек при загрузке страницы*/
initialCards.forEach(function (item) {
  const cardElement = createCard(item);
  cardsContainer.prepend(cardElement)
})

function createCard(item) {
  const cardTemplate = new Card('.card-template', item.name, item.link);
  const cardElement = cardTemplate.generateCard();
  return cardElement
}

/* export function handleCardClick(name, link) /{
  устанавливаем ссылку
  устанавливаем подпись картинке
  popupNewCards.open(name, link)
}*/



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












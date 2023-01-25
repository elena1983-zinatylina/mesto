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
const popupCloseButton = popupEdit.querySelector('.popup__close-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__info');
const popupNameUser = document.querySelector('.popup__input_user_name');
const profileTitle = document.querySelector('.profile__title');
const popupAboutUser = document.querySelector('.popup__input_user_about');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.elements__container');
const profileAddButton = document.querySelector('.profile__add-button');
const popupSubmitButton = document.querySelector('.popup__submit-button');
const openPopupNewCards = document.querySelector('.profile__add-button');

const popupNewCards = document.querySelector('.popup_new-card');
const popupLinkImages = popupNewCards.querySelector('.popup__input_link-images');
const popupPlaceName = popupNewCards.querySelector('.popup__input_plase-name');
const popupAddForm = popupNewCards.querySelector('.popup__info_new-card');
const closeAddButton = popupNewCards.querySelector('.popup__close-button');

const popupImage = document.querySelector('.popup_image');
const closeImage = popupImage.querySelector('.popup__close-button');
const popupFigureImage = popupImage.querySelector('.popup__figure-image');
const popupFigureCaption = popupImage.querySelector('.popup__figure-caption');
const cardTemplate = document
  .querySelector('.card-template')
  .content
  .querySelector('.card');
const esc = 'Escape';

/* Открытие и закрытие попапа */

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', setOverlayListener);
  document.addEventListener('keydown', setEscListener);

}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', setOverlayListener);
  document.removeEventListener('keydown', setEscListener);
}


// Функция закрытия по оверлею 
const setOverlayListener = function (evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
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


// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = popupNameUser.value;
  profileSubtitle.textContent = popupAboutUser.value;
  closePopup(popupEdit);
}

popupProfile.addEventListener('submit', submitForm)

/* перебора массива с карточками и добавление карточек из коробки*/

function arrayInitialCards(initialCards) {
  initialCards.forEach((card) => {
    cardsContainer.append(creatCard(card.link, card.name));
  })
}

arrayInitialCards(initialCards);


/* Создание новой карточки */

function creatCard(cardImage, cardName) {
  const newCard = cardTemplate
    .cloneNode(true);
  newCard.querySelector('.card__image')
    .src = cardImage;
  newCard.querySelector('.card__image')
    .alt = cardName;
  newCard.querySelector('.card__title')
    .textContent = cardName;

  /* лайк */
  newCard.querySelector('.card__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle('card__like-button_active');
  });

  /* Удаление карточки */
  newCard.querySelector('.card__delete-button').addEventListener('click', function (event) {
    event.target.closest('.card').remove();
  });


  /* открытие попапа с картинкой*/

  newCard.querySelector('.card__image').addEventListener('click', function () {
    popupFigureImage.src = cardImage;
    popupFigureImage.alt = cardName;
    popupFigureCaption.textContent = cardName;

    openPopup(popupImage);
  });

  return newCard;
}
//закрытие попапа с картинкой
closeImage.addEventListener('click', () => closePopup(popupImage));

function submitFormNewCard(event) {

  event.preventDefault();
  cardsContainer.prepend(creatCard(popupLinkImages.value, popupPlaceName.value));
  closePopup(popupNewCards);
  popupAddForm.reset();
}

popupAddForm.addEventListener('submit', submitFormNewCard);













//валидация форм
// Вынесем все необходимые элементы формы в константы


const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage
  errorElement.classList.add('form__input-error_active')
}


const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(errorElement)
  errorElement.textContent = "";
  errorElement.classList.remove('form__input-error_active')
}


const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const toggleButtonState = (inputList, submitButtonElement) => {

  const inputElements = Array.from(inputList);
 const hasInvalidInput = inputElements.some((inputElement) => {
  return !inputElement.validity.valid;
 });

 if (hasInvalidInput) {
submitButtonElement.classList.add('popup__submit-button_notactive');
submitButtonElement.setAttribute("disabled", true);
 } else {
  submitButtonElement.classList.remove('popup__submit-button_notactive');
submitButtonElement.removeAttribute("disabled");
 } 
};

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.popup__input');

  const submitButtonElement = formElement.querySelector('.popup__submit-button');
  
  inputList.forEach(inputElement => {
    
    const handleInput = (event) => {
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButtonElement)
    }

    inputElement.addEventListener('input', handleInput);
  });
  toggleButtonState(inputList, submitButtonElement);
};


const enableValidation = () => {
  const formsList = document.querySelectorAll('.popup__info');
  formsList.forEach((formElement) => {

    const formSubmit = (event) => {
      event.preventDefault();

  }
      formElement.addEventListener('submit', formSubmit);
     setEventListeners(formElement);
  });
  };
  
  enableValidation();


  
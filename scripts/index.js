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

/* Открытие попапа через кнопки редактирования профиля и добавления новой карточки*/

openPopupButton.addEventListener('click', function () {
  popupNameUser.value = profileTitle.textContent;
  popupAboutUser.value = profileSubtitle.textContent;

  openPopup(popupEdit);
});


popupCloseButton.addEventListener('cliсk', () => {
  popupEdit.classList.remove('popup_opened');
})


profileAddButton.addEventListener('click', function () {
  openPopup(popupNewCards);
});


function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = popupNameUser.value;
  profileSubtitle.textContent = popupAboutUser.value;
  closePopup(popupEdit);
}

popupProfile.addEventListener('submit', submitForm)


/* Открытие и закрытие попапа */

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

}

 /* закрытие попапов на Х*/
 popupCloseButton.addEventListener('click', () => closePopup(popupEdit));
 closeAddButton.addEventListener('click', () => closePopup(popupNewCards));
 closeImage.addEventListener('click', () => closePopup(popupImage));
 
/* перебора массива с карточками и добавление карточек из коробки*/

function arrayInitialCards(initialCards) {
  initialCards.forEach((item) => {
    cardsContainer.append(creatCard(item.link, item.name));
  })
}

arrayInitialCards(initialCards);


/* Создание новой карточки */

function creatCard(cardImage, cardName) {
  const cardTemplate = document.querySelector('.card-template').content;
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);


  newCard.querySelector('.card__image').src = cardImage;
  newCard.querySelector('.card__image').alt = cardName;
  newCard.querySelector('.card__title').textContent = cardName;

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


//попап добавления новой карточки
openPopupNewCards.addEventListener('click', (event) => {
  popupNewCards.classList.add('popup_opened');
});

closeAddButton.addEventListener('click', () => {
  popupNewCards.classList.remove('popup_opened');
});

function submitFormNewCard(event) {

  event.preventDefault();
  cardsContainer.prepend(creatCard(popupLinkImages.value, popupPlaceName.value));
  closePopup(popupNewCards);
  popupAddForm.reset();
}

popupAddForm.addEventListener('submit', submitFormNewCard);


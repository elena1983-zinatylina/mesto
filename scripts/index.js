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
const popupEdit = document.querySelector('.popup_edit');
const popupCloseButton = document.querySelector('.popup__close-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__info');
const popupNameUser = document.querySelector('.popup__input_user_name');
const profileTitle = document.querySelector('.profile__title');
const popupAboutUser = document.querySelector('.popup__input_user_about');
const profileSubtitle = document.querySelector('.profile__subtitle');
const openPopupNewCards = document.querySelector('.profile__add-button');
const popupNewCards = document.querySelector('.popup_new-card');
const cardsContainer = document.querySelector('.elements__container');
const closeAddButton = document.querySelector('.popup__close-add-button');
const closeImage = document.querySelector('.popup__close-image-button');
const popupImage = document.querySelector('.popup_image');


const cardTemplate = document
  .querySelector('.card-template')
  .content
  .querySelector('.card');

openPopupButton.addEventListener('click', (event) => {
  popupEdit.classList.add('popup_opened');
})

popupCloseButton.addEventListener('cliсk', () => {
  popupEdit.classList.remove('popup_opened');
})

function openPopup() {
  popupEdit.classList.add('popup_opened')
  popupNameUser.value = profileTitle.textContent;
  popupAboutUser.value = profileSubtitle.textContent;
}


function closePopup() {
  popupEdit.classList.remove('popup_opened')
}

popupCloseButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);


function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = popupNameUser.value;
  profileSubtitle.textContent = popupAboutUser.value;
  closePopup();
}

popupProfile.addEventListener('submit', submitForm)



// Добавления карточек при загрузке страницы:
function creatCard({ name, link }) {
  const Card = cardTemplate.cloneNode(true);
  const cardText = Card.querySelector('.card__title');
  cardText.textContent = name;
  const cardImage = Card.querySelector('.card__image');
  cardImage.src = link;
// удаление карточки
  const deleteButton = Card.querySelector('.card__delete-button');

  const deleteCard = () => {
    Card.remove();
  }
  deleteButton.addEventListener('click', deleteCard);
//лайк
  const likeButton = Card.querySelector('.card__like-button').addEventListener
    ('click', function (event) {
      event.target.classList.toggle('card__like-button_active');
    });

  //попап картинки
  cardImage.addEventListener('click', function (event) {
    popupImage.classList.add('popup_opened');
    const popupFigureImage = popupImage.querySelector('.popup__figure-image');
    popupFigureImage.src = link;
    popupFigureImage.alt = name;
    const popupFigureCaption = popupImage.querySelector('.popup__figure-caption');
    popupFigureCaption.textContent = name;

  });

  closeImage.addEventListener('click', () => {
    popupImage.classList.remove('popup_opened');
  });


  return Card;
}


function renderCard() {
  initialCards.forEach(initialCards => {
    const cardHTML = creatCard(initialCards);
    cardsContainer.append(cardHTML);
  });
}

renderCard();



//попап добавления новой карточки:
openPopupNewCards.addEventListener('click', (event) => {
  popupNewCards.classList.add('popup_opened');
});

closeAddButton.addEventListener('click', () => {
  popupNewCards.classList.remove('popup_opened');
});

const popupLinkImages = document.querySelector('.popup__input_link-images');
const popupPlaceName =  document.querySelector('.popup__input_plase-name');
const popupAddForm = document.querySelector('.popup__info_new-card');

function newCard(event) {
  event.preventDefault();
  cardsContainer.prepend(creatCard(popupLinkImages.value, popupPlaceName.value));
  closePopup(popupNewCards);
  popupAddForm.reset();
}

function submitFormNewCard(event) {
  event.preventDefault();
  creatCard();
  closePopup(popupNewCards);
}

popupAddForm.addEventListener('submit', newCard);
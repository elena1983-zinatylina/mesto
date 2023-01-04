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
const closePopupAddButton = document.querySelector('.popup__close-add-button');
const cardTemplate = document
.querySelector('.card-template')
.content
.querySelector('.card');


openPopupButton.addEventListener('click', (event) => {
    popupEdit.classList.add('popup_opened');
})

popupCloseButton.addEventListener('clik', () => {
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
function creatCard() {
const Card = cardTemplate.cloneNode(true);
const cardText = Card.querySelector('.card__title');
cardText.textContent = name;
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
})

closePopupAddButton.addEventListener('click', () => {
    popupNewCards.classList.remove('popup_opened');
})


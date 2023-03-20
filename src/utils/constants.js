export const initialCards = [
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
const popupImage = document.querySelector('.popup_image');
const popupFigureImage = popupImage.querySelector('.popup__figure-image');
const popupFigureCaption = popupImage.querySelector('.popup__figure-caption');
const closeImgButton = popupImage.querySelector('.popup__close-button');
const cardTemplate = document
    .querySelector('.card-template')
    .content
    .querySelector('.card');
const esc = 'Escape';
const popups = document.querySelectorAll('.popup');
const popupAvatar = document.querySelector('.popup_avatar');
const formAvatar = document.querySelector('.popup__info_avatar');
const buttonAvatar = document.querySelector('.profile__avatar-button');
const avatar = document.querySelector('.profile__avatar');
const popupDelete = document.querySelector('.popup_delete-card');


export const config = {
    formSelector: '.popup__info',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_notactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
};

export {
    popupEdit,
    openPopupButton,
    popupNewCards,
    popupNameUser,
    popupAboutUser,
    profileAddButton,
    popupAvatar,
    formAvatar,
    buttonAvatar,
    avatar,
    popupDelete
}
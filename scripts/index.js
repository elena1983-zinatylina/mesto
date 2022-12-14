const popupEdit = document.querySelector('.popup_edit');
const popupCloseButton = document.querySelector('.popup__close-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__info');
const popupNameUser = document.querySelector('.popup__input_user_name');
const profileTitle = document.querySelector('.profile__title');
const popupAboutUser = document.querySelector('.popup__input_user_about');
const profileSubtitle = document.querySelector('.profile__subtitle');

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



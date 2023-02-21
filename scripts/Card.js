import { openPopup, closePopup } from './index.js';

const popupImage = document.querySelector('.popup_image');
const popupFigureImage = popupImage.querySelector('.popup__figure-image');
const popupFigureCaption = popupImage.querySelector('.popup__figure-caption');
const closeImgButton = popupImage.querySelector('.popup__close-button');


export class Card {
  constructor(templateSelector, name, link) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link


  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;

    return this._element;
  }


  //открыть попап увеличения фото
  _openPopup() {
    openPopup(popupImage)
    popupFigureImage.src = this._link;
    popupFigureCaption.textContent = this._name;
    popupFigureImage.alt = this._name;
    closeImgButton.addEventListener('click', () => {
      closePopup(popupNewCard);
    })
  }
  //слушатели карточки
  _setEventListeners() {
    this._element.querySelector(".card__like-button").addEventListener('click', () => {
      this._handleLikeCard();
    })
    this._element.querySelector(".card__delete-button").addEventListener('click', () => {
      this._handleDeleteCard();
    })
    this._element.querySelector(".card__image").addEventListener('click', () => {
      this._openPopup();
      popupAddForm.reset();

    })
  }

  _handleLikeCard() {
    this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

}




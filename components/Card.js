//import { openPopup, closePopup } from './index.js';
 class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link
    this._handleCardClick = handleCardClick;

    
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
    //this._likeButton = this._element.querySelector('.card__like-button');
    
   
    this._title = this._element.querySelector('.card__title');
    
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    return this._element;
  }


  //открыть попап увеличения фото
  //_openPopup() {
   // openPopup(popupImage)
    //popupFigureImage.src = this._link;
   // popupFigureCaption.textContent = this._name;
   /// popupFigureImage.alt = this._name;
   
  //}
  //слушатели карточки
  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard();
    })
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    })
    this._image =  this._element.querySelector('.card__image');
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
   };
  

  _handleLikeCard() {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
  getNameImage() {
    return this._name;
  }

  getLinkImage() {
    return this._link;
  }


}



export default Card

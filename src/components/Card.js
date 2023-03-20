//import { openPopup, closePopup } from './index.js';
export default class Card {
  constructor({data, cardSelector, handleCardClick, userId, handleDeleteIconClick, handleSetLike, handleRemoveLike}) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._likes = data.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
    //this._card = this._getTemplate();
  }

  _getTemplate() {
    return document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

}

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._hasDeleteButton();
    this._isCardLiked();
    this._title = this._element.querySelector('.card__title');
    this._likesNumber = this._element.querySelector('.card__likes-number');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._likesNumber.textContent = this._likes.length;
    return this._element;

  }

  //слушатели карточки
  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like-button_active')) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    })
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    })
    this._image = this._element.querySelector('.card__image');
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId);
      
    })
  };


  //_handleLikeCard() {
   // this._likeButton.classList.toggle("card__like-button_active");
  //};

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
// проверяем владельца карточки и убираем кнопку Delete
_hasDeleteButton() {
  if (this._userId !== this._cardOwnerId) {
    this._deleteButton.remove();
  }
}

// поставить/удалить лайк, изменение количества лайков
handleLikeCard(data) {
  this._likes = data.likes;
  this._likesNumber.textContent = this._likes.length;
  this._likeButton.classList.toggle('card__like-button_active');
}

 // Проверка, стоит ли лайк на карточке
 _isCardLiked() {
  if (this._likes.some((user) => {
    return this._userId === user._id;
  })) {
    this._likeButton.classList.add('card__like-button_active');
  }
}


}

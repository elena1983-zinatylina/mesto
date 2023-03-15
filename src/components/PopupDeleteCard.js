import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup{
    constructor( {popupSelector, handleFormSubmit}){
        super(popupSelector);
    this._form = this._popup.querySelector('.popup__info');
    this._handleFormSubmit = handleFormSubmit
    }
 // принимает коллбэк на удаление карточки
 setCardObject(card) {
    this._cardObject = card
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt, this._cardObject)
    })
  }
}
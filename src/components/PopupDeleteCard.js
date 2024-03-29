import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__info');

  }
  
  setCardObject(removing) {
    this._handleFormSubmit = removing;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
  }
}










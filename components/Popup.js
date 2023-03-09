export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }


  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup')) {
        this.close();
      }
      if (event.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
}





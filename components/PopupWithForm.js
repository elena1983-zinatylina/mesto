import {Popup} from "./Popup.js";

 class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__info');
    this._popupInput = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputValue = {};
    this._popupInput.forEach((input) => {
      inputValue[input.name] = input.value;
    });
    return inputValue;
  }

  setInputValues(data) {
    this._popupInput.forEach((input) => {
      input.value = data[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
      this.close()
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
export default PopupWithForm;
import Popup from "./Popup.js";

 class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__info');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._submitButton = this._popupForm.querySelector('.popup__submit-button');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._inputValue = {};
    this._inputList.forEach((input) => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close()
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

// Изменяем состояние кнопки во время загрузки
loading(isLoading) {
  if (isLoading) {
    this._submitButton.textContent = 'Сохранение...'
  } else {
    this._submitButton.textContent = this._submitButtonText;
 }
}
}
//showLoading() {
 // this._submitButtom.textContent = 'Сохранение...'
//}

//hideLoading() {
 // this._submitButtom.textContent = this._submitButtonText
//}

export default PopupWithForm;
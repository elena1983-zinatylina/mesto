export class FormValidator {
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      
  }

  _showError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass)
};


_hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass)
};


_hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

_checkValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
}

_toggleButtonState = (inputList) => {
    const submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    if (this._hasInvalidInput(inputList)) {
      submitButtonElement.classList.add(this._config.inactiveButtonClass);
       submitButtonElement.setAttribute("disabled", true);
    } else {
       submitButtonElement.classList.remove(this._config.inactiveButtonClass);
       submitButtonElement.removeAttribute("disabled");
    }
};

_setEventListeners = () => {
   const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
   const submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);

    inputList.forEach(inputElement => {

        const handleInput = (event) => {
            this._checkValidity(inputElement);
            this._toggleButtonState(inputList, submitButtonElement)
        };

        inputElement.addEventListener('input', handleInput);
    });

    this._toggleButtonState();
};

_blockedButton() {
    const submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);
   submitButtonElement.classList.add(this._config.inactiveButtonClass)
  submitButtonElement.setAttribute('disabled', 'disabled');
}

enableValidation  ()  {
    const formsList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    formsList.forEach((formElement) => {

        this._formElement.addEventListener('submit', () => {
            this._blockedButton();
       });

        this._setEventListeners();
    });
};



}
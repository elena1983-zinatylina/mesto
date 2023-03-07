 class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showError = (inputElement, errorMessage) => {
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


  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _blockedButton() { 

    this._submitButtonElement.classList.add(this._config.inactiveButtonClass) 

    this._submitButtonElement.setAttribute('disabled', 'disabled'); 

  } 

  resetValidation() {
    this._toggleButtonState(); //<== управляем кнопкой ==

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement) //<==очищаем ошибки ==
    });

  }


  _checkValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  _toggleButtonState = () => {

    if (this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(this._config.inactiveButtonClass);
      this._submitButtonElement.setAttribute("disabled", true);
    } else {
      this._submitButtonElement.classList.remove(this._config.inactiveButtonClass);
      this._submitButtonElement.removeAttribute("disabled");
    }
  };

  _setEventListeners = () => {

    

    this._inputList.forEach(inputElement => {

      const handleInput = (event) => {
        this._checkValidity(inputElement);
        this._toggleButtonState(this._inputList, this._submitButtonElement)
      };

      inputElement.addEventListener('input', handleInput);
    });

    this._toggleButtonState();
  };


  enableValidation() {

    this._formElement.addEventListener('submit', () => { 

      this._blockedButton(); 

    }); 

      this._setEventListeners();
    };
    
  };

  export default FormValidator
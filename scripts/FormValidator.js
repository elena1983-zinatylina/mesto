export class FormValidator {
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      
  }

  _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage
    errorElement.classList.add(this._errorClass)
};


_hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass)
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

_toggleButtonState = () => {

    if (hasInvalidInput(inputList)) {
        this._submitButtonElement.classList.add(this._inactiveButtonClass);
        this._submitButtonElement.setAttribute("disabled", true);
    } else {
        this._submitButtonElement.classList.remove(this._inactiveButtonClass);
        this._submitButtonElement.removeAttribute("disabled");
    }
};

_setEventListeners = () => {
   this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

   this._submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._inputList.forEach(inputElement => {

        const handleInput = (event) => {
            this._checkValidity(inputElement);
            toggleButtonState(inputList, this._submitButtonElement)
        };

        inputElement.addEventListener('input', handleInput);
    });

    toggleButtonState();
};

blockedButton() {
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    thisw._buttonElement.classList.add(this._inactiveButtonClass)
    this._buttonElement.setAttribute('disabled', 'disabled');
}

enableValidation  ()  {
    const formsList = Array.from(this._formElement.querySelectorAll(this._formSelector));
    formsList.forEach((formElement) => {

        this._formElement.addEventListener('submit', () => {
            this._blockedButton(formElement);
        });

        this._setEventListeners();
    });
};


//enableValidation  ()  {
   // this._setEventListeners();
//};






  /*_showError = (inputElement, errorMassege) => {
   // const { inputErrorClass, errorClass } = this._config;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.errorMassege;
    errorElement.classList.add(this._errorClass)
};


_hideError = (inputElement) => {
    const { inputErrorClass, errorClass } = this._config;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass)
};


_checkValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
        this._hideError(inputElement, this._config);
    } else {
        this.__showError(inputElement, this._config);
    }
};

_hasInvalidInput = (inputList) => {
    return inputList.some((card) => {
        if(card.validity.valid){
        return false;
    } else {
        return true;
    }
})
}

_toggleButtonState  ()  {
   const  { inputSelector, submitButtonSelector } = this._config;
   const submitButtonElement =  this._formElement.querySelector(submitButtonSelector);
   const inputList = Array.from( this._formElement.querySelectorAll(inputSelector));
    if (this._hasInvalidInput(inputList)) {
        submitButtonElement.disabled = true;
       ;
    } else {
       submitButtonElement.disabled = false;
    }
};

_setEventListeners  ()  {
    const { inputSelector, submitButtonSelector, ...rest} = this._config; 
    const inputList = Array.from(this._formElement.querySelectorAll(inputSelector));

    const submitButtonElement = this._formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, submitButtonElement);
        inputList.forEach((inputElement) => {
            this._checkValidity(inputElement, rest);
            inputElement.addEventListener('input', () => {
                this._checkValidity(inputElement, rest);
                this._toggleButtonState(inputList, submitButtonElement);
            })
        })
    }

//blockedButton(formElement, config) {
   // const buttonElement = formElement.querySelector(config.submitButtonSelector)
    //buttonElement.classList.add(config.inactiveButtonClass)
    //buttonElement.setAttribute('disabled', 'disabled');
//}

resetForm() {
  const { inputSelector, submitButtonSelector, ...rest } = this._config;
  this._formElement.reset();
  const inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
  inputList.forEach((input) => {
      this._hideError(input, rest);
      const inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
      const submitButtonElement = this._formElement.querySelector(submitButtonSelector);
      this._toggleButtonState(inputList, submitButtonElement);
  })
}*/




}
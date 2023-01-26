//валидация форм

const validation = {
    formSelector: '.popup__info',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_notactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error_active'
  }; 
  
const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage
    errorElement.classList.add(validation.errorClass)
};


const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validation.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(validation.errorClass)
};


const checkValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement);
    }
};

const toggleButtonState = (inputList, submitButtonElement) => {

    const inputElements = Array.from(inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
        return !inputElement.validity.valid;
    });

    if (hasInvalidInput) {
        submitButtonElement.classList.add(validation.inactiveButtonClass);
        submitButtonElement.setAttribute("disabled", true);
    } else {
        submitButtonElement.classList.remove(validation.inactiveButtonClass);
        submitButtonElement.removeAttribute("disabled");
    }
};

const setEventListeners = (formElement) => {
    const inputList = formElement.querySelectorAll(validation.inputSelector);

    const submitButtonElement = formElement.querySelector(validation.submitButtonSelector);

    inputList.forEach(inputElement => {

        const handleInput = (event) => {
            checkValidity(formElement, inputElement);
            toggleButtonState(inputList, submitButtonElement)
        };

        inputElement.addEventListener('input', handleInput);
    });

    toggleButtonState(inputList, submitButtonElement);
};


const enableValidation = () => {
    const formsList = document.querySelectorAll(validation.formSelector);
    formsList.forEach((formElement) => {

        const formSubmit = (event) => {
            event.preventDefault();
        };

        formElement.addEventListener('submit', formSubmit);
        setEventListeners(formElement);
    });
};

  enableValidation();















































/*const formElement = document.querySelector('.popup__info');



const getErrorElement = (inputElement) => {
    return inputElement
    .closest(".form__section")
    .querySelector(".form__input-error"); 
}

const showError = (formElement, inputElement, errorMessage) => {
   const errorElement = getErrorElement(inputElement);
errorElement.textContent = errorMessage
inputElement.classList.remove("form__input_is_valid");
errorElement.classList.add("form__input-error_active");


};


const hideError = (formElement, inputElement) => {
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = "";
    errorElement.classList.remove("form__input-error_active");
    inputElement.classList.add("form__input_is_valid");
};


const checkValidity = (formElement, inputElement) => {
    console.log (inputElement.validity);
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMassage;
        showError(formElement, inputElement, errorMessage);
} else {
    hideError(formElement, inputElement);
};
};

const setEventListeners = (formElement) => {
    const inputList = formElement.querySelectorAll('.popup__input');

    inputList.forEach ((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            console.log(event.target.name, event.target.value);
        
            checkValidity(formElement,inputElement);
        });
    });
};

const enableValidation = () => {
const formList = document.querySelectorAll('.popup__info');

formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) =>{
        event.preventDefault();

    });
    setEventListeners(formElement);
});
};
enableValidation();







//yodje



const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log (errorElement)

    errorElement.textContent = errorMessage
    errorElement.classList.add('form__input-error_active')
}


const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log (errorElement)
    errorElement.textContent = "";
    errorElement.classList.remove('form__input-error_active')
}



const checkValidity = (formElement, inputElement) => {

const isInputNotValid = !inputElement.validity.valid;
console.log(inputElement.name, isInputNotValid, inputElement.validity);

if(isInputNotValid) {
    const errorMessage = inputElement.validationMessege;

   showError(formElement, inputElement, errorMessage);
} else {
   hideError(formElement, inputElement);
}
};


const setEventListeners = (formElement) =>  {
  const inputList = formElement.querySelectorAll('.popup__input'); 
  inputList.forEach(inputElement => {
 inputElement.addEventListener('input', (event) =>{
checkValidity(formElement, inputElement);
 });
  });
};


const enableValidation = () => {
const formsList = document.querySelectorAll('.popup__info');
formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

    });
   setEventListeners(formElement);
});
};

enableValidation();*/


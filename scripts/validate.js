//валидация форм


const showError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage
    errorElement.classList.add(config.errorClass)
};


const hideError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(config.errorClass)
};


const checkValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideError(formElement, inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, submitButtonElement, config) => {

    if (hasInvalidInput(inputList)) {
        submitButtonElement.classList.add(config.inactiveButtonClass);
        submitButtonElement.setAttribute("disabled", true);
    } else {
        submitButtonElement.classList.remove(config.inactiveButtonClass);
        submitButtonElement.removeAttribute("disabled");
    }
};

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

    inputList.forEach(inputElement => {

        const handleInput = (event) => {
            checkValidity(formElement, inputElement, config);
            toggleButtonState(inputList, submitButtonElement, config)
        };

        inputElement.addEventListener('input', handleInput);
    });

    toggleButtonState(inputList, submitButtonElement, config);
};

function buttonBlock(formElement, config) {
    const buttonElement = formElement.querySelector(config.submitButtonSelector)
    buttonElement.classList.add(config.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'disabled');
}

const enableValidation = (config) => {
    const formsList = Array.from(document.querySelectorAll(config.formSelector));
    formsList.forEach((formElement) => {

        formElement.addEventListener('submit', (event) => {
           buttonBlock(formElement, config);
        });

        setEventListeners(formElement, config);
    });
};


enableValidation({
    formSelector: '.popup__info',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_notactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error_active'
});


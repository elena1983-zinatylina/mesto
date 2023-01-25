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


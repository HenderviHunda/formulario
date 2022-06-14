
const fristName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const fristNameError = document.querySelector('#fristNameError');
const lastNamerError = document.querySelector('#lastNamerError');
const emailError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button = document.querySelector('#button');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmpty(fristName.value, fristName, fristNameError, 'first name');
    validateEmpty(lastName.value, lastName, lastNamerError, 'last name');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passError, 'password');
});

function validateEmail(valueInput, divInput, divError, nameInput){
    let regExp =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(valueInput) == true) {
        hideError(divInput, divError);
    }else{
        showError(divInput, divError, 'looks like this is not an email');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="img/icon-error.svg" alt="">
                            <p class="error">${error}</p>`;
}

function hideError(divInput, divError, error, nameInput){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ` `;
}



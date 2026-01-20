let submitButton = document.querySelector('#submit-button');
let emailInput = document.querySelector('#email');
let errorText = document.querySelector('#error-text');
let form = document.querySelector('#form');


form.addEventListener('submit', function (submit) {

    if (emailInput.value === "") {

        submit.preventDefault();
        emailInput.classList.add('form__email-input--error-modifier');
        errorText.classList.remove('hidden');
    }

})
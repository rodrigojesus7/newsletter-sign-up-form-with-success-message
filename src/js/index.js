let submitButton = document.querySelector('#submit-button');
let emailInput = document.querySelector('#email');
let errorText = document.querySelector('#error-text');
let form = document.querySelector('#form');
let dismissButton = document.querySelector('#dismiss-button');
let mainSection = document.querySelector('#main-section');
let submitedSuccessfullySection = document.querySelector('#submited-successfully-card')
let emailConfirmation = document.querySelector('#email-confirmation')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', function (submit) {

    submit.preventDefault();

    if (emailInput.value.trim() === "" || emailRegex.test(emailInput.value) === false) {

        emailInput.classList.add('form__email-input--error-modifier');
        errorText.classList.remove('hidden');
    }
    
    else {
        submit.preventDefault();
        mainSection.classList.toggle('hidden');
        submitedSuccessfullySection.classList.toggle('hidden');
        emailInput.classList.remove('form__email-input--error-modifier');
        errorText.classList.add('hidden');
        emailConfirmation.innerHTML = emailInput.value;
    }

})



dismissButton.addEventListener('click', function () {
    submitedSuccessfullySection.classList.toggle('hidden');
    mainSection.classList.toggle('hidden');
})
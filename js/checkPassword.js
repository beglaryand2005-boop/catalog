function checkPassword(password) {
    // check number 
    // check uppercaser
    // check lowercase
    // check symbols
    // check length min 8

    // console.log(password.match(/[0-9]/))
    // console.log(/[0-9]/.test(password))

    const errors = [];

    if (!/[0-9]/.test(password)) {
        errors.push('password must have at least 1 number')
    }
    if (!/[a-z]/.test(password)) {
        errors.push('password must have at least 1 lowercase letter')
    }
    console.log(djsbgvkdfjhgfd)
    if (!/[A-Z]/.test(password)) {
        errors.push('password must have at least 1 uppercase letter')
    }
    if (!/[!@#$%&*-+)?]/.test(password)) {
        errors.push('password must have at least 1 symbol')
    }
    if (password.length < 8) {
        errors.push('password must be at leaset 8 charachters')
    }

    return errors;
}


const passwordInput = document.querySelector('#login .password-field input');
passwordInput.addEventListener('keyup', function () {
    const errors = checkPassword(passwordInput.value);
    if (errors.length > 0) {
        //    const errorsText =  errors.map(e => '<div class="error">' + e + '</div>').join('');
        //    const errorsText =  errors.map(function(value,index,array) {
        //     return '<div class="error">' + value + '</div>';
        //    }).join('');

        let errorsText = [];

        for (let i = 0; i < errors.length; i++) {
            errorsText.push('<div class="error">' + errors[i] + '</div>')
        }

        errorsText = errorsText.join('')



        document.querySelector('#login .password-errors').innerHTML = errorsText;
        passwordInput.parentElement.classList.add('input-error')


    }
    else {
        document.querySelector('#login .password-errors').innerHTML = '';
        passwordInput.parentElement.classList.remove('input-error')
    }
})
checkPassword('sjdgfdsdfgdf');

document.querySelector('.show-password').addEventListener('click', function () {

    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
        this.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
    else {
        passwordInput.setAttribute('type', 'password')
        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
})
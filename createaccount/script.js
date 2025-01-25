const validator = new JustValidate('#form');

validator.addField('#name', [
    {
        rule: "required",
        errorMessage: "Please enter your name"
    },
    {
        rule: "minLength",
        value: 3,
        errorMessage: "Name should have at least 3 characters"
    },
]);

validator.addField('#email', [
    {
        rule: "required",
        errorMessage: 'Please enter your email'
    },
    {
        rule: 'email',
        errorMessage: 'Please enter a valid email'
    },
]);

validator.addField('#password', [
    {
        rule: "required",
        errorMessage: "Please enter your password"
    },
    {
        rule: "minLength",
        value: 7,
        errorMessage: "Password should have at least 7 characters"
    },
]);

validator.addField('#ConfirmPassword', [
    {
        rule: "required",
        errorMessage: "Please confirm your password"
    },
    {
        rule: "customRegexp",
        value: () => document.getElementById('password').value,
        errorMessage: "Passwords do not match"
    },
]);

const showPass = document.getElementById('showPass');
showPass.addEventListener('click', () => {
    const password = document.getElementById('password');
    const ConfirmPassword = document.getElementById('ConfirmPassword');
    if (password.type === 'password') {
        password.type = 'text';
        ConfirmPassword.type = 'text';
    } else {
        password.type = 'password';
        ConfirmPassword.type = 'password';
    }
});
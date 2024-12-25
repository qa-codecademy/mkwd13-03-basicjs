
let loginForm = document.getElementById('login-form');
let registerForm = document.getElementById('register-form');

document.getElementById('login')
    .addEventListener('click', function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

document.getElementById('register')
    .addEventListener('click', function () {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

document.getElementById('register-btn')
    .addEventListener('click', function() {

    });
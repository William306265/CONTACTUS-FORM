const form = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    const formAlert = document.querySelectorAll('.form-alert');
    let isValid = true;

    if (firstName === '') {
        isValid = false;
        document.querySelector('#fname + .form-alert').style.display = 'block';
        document.querySelector('#fname').style.border = '1px solid var(--Red)';
    } else {
        document.querySelector('#fname + .form-alert').style.display = 'none';
        document.querySelector('#fname').style.border = '1px solid var(--grey-medium)';
    }

    if (lastName === '') {
        isValid = false;
        document.querySelector('#lname + .form-alert').style.display = 'block';
        document.querySelector('#lname').style.border = '1px solid var(--Red)';
    } else {
        document.querySelector('#lname + .form-alert').style.display = 'none';
        document.querySelector('#lname').style.border = '1px solid var(--grey-medium)';
    }

    if (!isValidEmail(email)) {
        isValid = false;
        document.querySelector('#email + .form-alert').style.display = 'block';
        document.querySelector('#email').style.border = '1px solid var(--Red)';
    } else {
        document.querySelector('#email + .form-alert').style.display = 'none';
        document.querySelector('#email').style.border = '1px solid var(--grey-medium)';
    }

    if (!queryType) {
        isValid = false;
        document.querySelector('.radio-inputs + .form-alert').style.display = 'block';
    } else {
        document.querySelector('.radio-inputs + .form-alert').style.display = 'none';
    }

    if (message === '') {
        isValid = false;
        document.querySelector('#message + .form-alert').style.display = 'block';
        document.querySelector('#message').style.border = '1px solid var(--Red)';
    } else {
        document.querySelector('#message + .form-alert').style.display = 'none';
        document.querySelector('#message').style.border = '1px solid var(--grey-medium)';
    }

    if (!consent) {
        isValid = false;
        formAlert[5].classList.add('form-error');
    } else {
        formAlert[5].classList.remove('form-error');
    }

    if (isValid) {
        successMessage.classList.add('active');
        form.reset();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

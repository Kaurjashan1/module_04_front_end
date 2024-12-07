document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const regexUsername = /^[a-zA-Z0-9]+$/;

    if (!name) showError('name', 'Name is required.');
    if (!email) showError('email', 'Email is required.');
    if (!regexUsername.test(username)) showError('username', 'Invalid username.');

    if (!document.querySelector('input[name="gender"]:checked')) {
        showError('gender', 'Please select a gender.');
    }

    if (document.querySelectorAll('input[name="hobby"]:checked').length === 0) {
        showError('hobby', 'Please select at least one hobby.');
    }

    if (document.getElementsByTagName('span').length === 0) {
        alert('Form submitted successfully!');
        this.submit();
    }
});

function showError(id, message) {
    const field = document.getElementById(id);
    const error = document.createElement('span');
    error.textContent = message;
    error.style.color = 'red';
    field.parentNode.appendedChild(error);
}

function clearErrors() {
    document.querySelectorAll('span').forEach(span => span.remove());
}

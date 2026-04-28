// ===== Handle Login Button Click =====
document.getElementById('btn-submit').addEventListener('click', function () {

    // ===== Get User Input Values =====

    // Get email input value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Get password input value
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    // ===== Basic Authentication Check =====
    // NOTE: This is only for demo purposes (client-side validation)

    if (email === 'bdahsan1999wd@gmail.com' && password === 'password') {

        // Redirect to bank dashboard page if credentials match
        window.location.href = 'bank.html';

    } else {

        // Show error message if credentials are incorrect
        alert('Tui password vule gesos...!!! Toke ami tejjo sontan gosona korlam...!!!');
    }
});
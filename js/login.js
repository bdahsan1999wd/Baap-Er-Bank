// console.log('login js file');

document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'bdahsan1999wd@gmail.com' && password === 'password'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gesos !!! Toke ami tejjo sontan gosona korlam...');
    }
});


/* ------------------------------Same Code Details Way------------------------------ */

/* 

step-1: add click event handler with the submit button

step-2: get the email address inside the email input field
always remember to use .value to get text from an input field -----!!!

step-3: get the password inside the password input field
3.1: set id on the html element 
3.2: get the element
3.3: get the value from the element

step-4: verify email and password and check whether valid user or not
DANGER: DO NOT VERIFY email password on the client side -----!!!

*/


// /* ------------------------------step 1------------------------------ */
// document.getElementById('btn-submit').addEventListener('click', function(){
//     // console.log('Submit button clicked...');

// /* ------------------------------step 2------------------------------ */
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
//     // console.log(email);

// /* ------------------------------step 3------------------------------ */
//     const passwordField = document.getElementById('user-password');
//     const password = passwordField.value;
//     // console.log(password);

// /* ------------------------------step 4------------------------------ */
//     if(email === 'sontan@baap.com' && password === 'secret'){
//         // console.log('valid user');
//         window.location.href = 'bank.html';
//     }
//     else{
//         // console.log('invalid user');
//         alert('Tui password vule gesos !!! Toke ami tejjo sontan gosona korlam...');
//     }
// });
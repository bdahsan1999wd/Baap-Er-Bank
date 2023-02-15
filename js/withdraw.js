// console.log('withdraw js file');
 
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const currentWithDrawAmountString = withdrawInputField.value;
    const currentWithdrawAmount = parseFloat(currentWithDrawAmountString);
    withdrawInputField.value = '';
    if (isNaN(currentWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    if (currentWithdrawAmount > previousTotalBalance) {
        alert('Baap er bank e eto taka nai... !!!');
        return;
    }
    const totalWithdrawElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = totalWithdrawElement.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);
    const currentTotalWithdraw = currentWithdrawAmount + previousTotalWithdraw;
    totalWithdrawElement.innerText = currentTotalWithdraw;
    const currentBalanceTotal =  previousTotalBalance - currentWithdrawAmount;
    totalBalanceElement.innerText = currentBalanceTotal;
});


/* ------------------------------Same Code Details Way------------------------------ */

/* 

step-1: adds a click event listener/handler to the withdraw button.

step-2: get the withdraw amount from the withdraw input field.
remember: For input field use .value to the the value inside the input field -----!!!
step-2-1: also make sure to convert the input into a number by using parseFloat-----!!!

step-3: clears the withdraw input field after getting the value. and displays an alert message if the current withdraw amount is not a valid number.

step-4: get the previous total balance amount.and displays an alert message if the current withdraw amount is greater than the previous total balance.

step-5: get the previous total withdraw amount.
remember: for non-input(element other than input, textarea) use innerText to get the text -----!!!

step-6: calculate the current total withdraw amount and set the value step (2+5) to set the total withdraw amount.

step-7: calculate the current total balance by subtracting the current withdraw amount from the previous total balance and set the value step (4-2) to set the total balance amount.

*/


// /* -------------------------------step 1------------------------------ */
// document.getElementById('btn-withdraw').addEventListener('click', function() {
//     // console.log('withdraw button clicked...');
    
// /* -------------------------------step 2------------------------------ */
//     const withdrawInputField = document.getElementById('withdraw-input-field');
//     const currentWithDrawAmountString = withdrawInputField.value;
//     const currentWithdrawAmount = parseFloat(currentWithDrawAmountString);
//     // console.log(currentWithdrawAmount);

// /* -------------------------------step 3------------------------------ */
//     withdrawInputField.value = '';
//     if (isNaN(currentWithdrawAmount)){
//         alert('Please provide a valid number');
//         return;
//     }
    
// /* ------------------------------step 4------------------------------ */
//     const totalBalanceElement = document.getElementById('balance-total');
//     const previousTotalBalanceString = totalBalanceElement.innerText;
//     const previousTotalBalance = parseFloat(previousTotalBalanceString);
//     // console.log(previousTotalBalance);
//     if (currentWithdrawAmount > previousTotalBalance) {
//         alert('Baap er bank e eto taka nai... !!!');
//         return;
//     }

// /* -------------------------------step 5------------------------------ */
//     const totalWithdrawElement = document.getElementById('withdraw-total');
//     const previousTotalWithdrawString = totalWithdrawElement.innerText;
//     // console.log(previousTotalWithdrawString);
//     const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

// /* -------------------------------step 6------------------------------ */
//     const currentTotalWithdraw = currentWithdrawAmount + previousTotalWithdraw;
//     totalWithdrawElement.innerText = currentTotalWithdraw;


// /* ------------------------------step 7------------------------------ */
//     const currentBalanceTotal =  previousTotalBalance - currentWithdrawAmount;
//     totalBalanceElement.innerText = currentBalanceTotal;

// });
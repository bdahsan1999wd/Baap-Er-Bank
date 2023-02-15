// console.log('deposit js file');

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-input-field');
    const currentDepositAmountString = depositInputField.value;
    const currentDepositAmount = parseFloat(currentDepositAmountString);
    depositInputField.value = '';
    if (isNaN(currentDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    const totalDepositElement = document.getElementById('deposit-total');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);
    const currentTotalDeposit = currentDepositAmount + previousTotalDeposit;
    totalDepositElement.innerText = currentTotalDeposit;
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = currentDepositAmount + previousTotalBalanceAmount;
    totalBalanceElement.innerText = currentTotalBalance;
});


/* ------------------------------Same Code Details Way------------------------------ */

/* 

step-1: adds a click event listener/handler to the deposit button.

step-2: get the deposit amount from the deposit input field.

remember: For input field use .value to the the value inside the input field -----!!!

step-2.1: also make sure to convert the input into a number by using parseFloat -----!!!

step-3: clear the deposit input field after getting the value. and displays an alert message if the current withdraw amount is not a valid number.

step-4: get the previous total deposit amount

remember: for non-input(element other than input, textarea) use innerText to get the text -----!!!

step-5: calculate current total deposit amount and set the value step (2+4) to set the total deposit amount

step-6: get the previous total ballance amount

step-7: calculate current total balance and set the value step (2+6) to set the total balance amount

*/


// /* ------------------------------step 1------------------------------ */
// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // console.log('deposit button clicked...');
    
// /* ------------------------------step 2------------------------------ */
//     const depositInputField = document.getElementById('deposit-input-field');
//     const currentDepositAmountString = depositInputField.value;
//     // console.log(currentDepositAmountString);
//     const currentDepositAmount = parseFloat(currentDepositAmountString);
//     // console.log(currentDepositAmount);

// /* ------------------------------step 3------------------------------ */
//     depositInputField.value = '';
//     if (isNaN(currentDepositAmount)){
//         alert('Please provide a valid number');
//         return;
//     }

// /* ------------------------------step 4------------------------------ */
//     const totalDepositElement = document.getElementById('deposit-total');
//     const previousTotalDepositString = totalDepositElement.innerText;
//     // console.log(previousDepositTotalString);
//     const previousTotalDeposit = parseFloat(previousTotalDepositString);

// /* ------------------------------step 5------------------------------- */
//     const currentTotalDeposit = currentDepositAmount + previousTotalDeposit;
//     // set the deposit total
//     totalDepositElement.innerText = currentTotalDeposit;

// /* -------------------------------step 6------------------------------ */
//     const totalBalanceElement = document.getElementById('balance-total');
//     const previousTotalBalanceString = totalBalanceElement.innerText;
//     // console.log(previousBalanceTotalString);
//     const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);

// /* ------------------------------step 7------------------------------- */
//     const currentTotalBalance = currentDepositAmount + previousTotalBalanceAmount;
//     // set the total balance
//     totalBalanceElement.innerText = currentTotalBalance;

// });
// ===== Handle Withdraw Button Click =====
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // ===== Get Withdraw Amount from Input =====
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const currentWithdrawAmount = parseFloat(withdrawInputField.value);

    // Clear input field after reading value
    withdrawInputField.value = '';

    // ===== Validate Input =====
    if (isNaN(currentWithdrawAmount) || currentWithdrawAmount <= 0) {
        alert('Please provide a valid positive number');
        return;
    }

    // ===== Get Current Balance =====
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(totalBalanceElement.innerText);

    // Prevent withdrawal if balance is insufficient
    if (currentWithdrawAmount > previousTotalBalance) {
        alert('Baap er bank e eto taka nai...!!!');
        return;
    }

    // ===== Update Total Withdraw =====
    const totalWithdrawElement = document.getElementById('withdraw-total');
    const previousTotalWithdraw = parseFloat(totalWithdrawElement.innerText);

    const currentTotalWithdraw = previousTotalWithdraw + currentWithdrawAmount;
    totalWithdrawElement.innerText = currentTotalWithdraw;

    // ===== Update Remaining Balance =====
    const currentBalanceTotal = previousTotalBalance - currentWithdrawAmount;
    totalBalanceElement.innerText = currentBalanceTotal;
});
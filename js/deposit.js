// ===== Handle Deposit Button Click =====
document.getElementById('btn-deposit').addEventListener('click', function () {

    // ===== Get Deposit Amount from Input =====
    const depositInputField = document.getElementById('deposit-input-field');
    const currentDepositAmount = parseFloat(depositInputField.value);

    // Clear input field after reading value
    depositInputField.value = '';

    // ===== Validate Input =====
    if (isNaN(currentDepositAmount) || currentDepositAmount <= 0) {
        alert('Please provide a valid positive number');
        return;
    }

    // ===== Update Total Deposit =====
    const totalDepositElement = document.getElementById('deposit-total');
    const previousTotalDeposit = parseFloat(totalDepositElement.innerText);

    const currentTotalDeposit = previousTotalDeposit + currentDepositAmount;
    totalDepositElement.innerText = currentTotalDeposit;

    // ===== Update Account Balance =====
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(totalBalanceElement.innerText);

    const currentTotalBalance = previousTotalBalance + currentDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;
});
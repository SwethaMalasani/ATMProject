/*let pinEntered = '';
let correctPin = '1234';  // Example correct PIN
let checkingBalance = 1000.00;
let savingsBalance = 2000.00;

function insertCard() {
  document.getElementById('mainDisplay').innerText = 'Please Enter PIN';
}

function enterNumber(num) {
  pinEntered += num;
  document.getElementById('mainDisplay').innerText = pinEntered;
}

function clearEntry() {
  pinEntered = '';
  document.getElementById('mainDisplay').innerText = 'PIN Cleared';
}

function submitPIN() {
   
//let pinEntered = '';
let correctPin = '1234';
  if (correctPin) {
    document.getElementById('mainDisplay').innerText = 'PIN Correct';
    document.getElementById('accountDisplay').innerText = 'Check the balance';
    document.getElementById('checkingBalance').innerText = checkingBalance.toFixed(2);
    document.getElementById('savingsBalance').innerText = savingsBalance.toFixed(2);
  } else {
    document.getElementById('mainDisplay').innerText = 'Incorrect PIN';
    setTimeout(() => {
      pinEntered = '';
      document.getElementById('mainDisplay').innerText = 'Please Enter PIN';
    }, 1500);
  }
}

function startDeposit() {
  document.getElementById('mainDisplay').innerText = 'Enter Deposit Amount';
  // Code to handle deposit
}

function startWithdraw() {
  document.getElementById('mainDisplay').innerText = 'Enter Withdrawal Amount';
  // Code to handle withdrawal
}

function checkBalance() {
  document.getElementById('mainDisplay').innerText = 'Balance: ' + checkingBalance.toFixed(2);
  // Code to show account balance
}*/

let pinEntered = '';
let correctPin = '1234';  // Example correct PIN
let checkingBalance = 1000.00;
let savingsBalance = 2000.00;
let currentAccount = 'checking'; // Default account is checking

// When card is inserted
function insertCard() {
  document.getElementById('mainDisplay').innerText = 'Please Enter PIN';
}

// When a key is pressed
function enterNumber(num) {
  pinEntered += num;
  document.getElementById('mainDisplay').innerText = pinEntered;
}

// Clear the entered PIN
function clearEntry() {
  pinEntered = '';
  document.getElementById('mainDisplay').innerText = 'PIN Cleared';
}

// Submit the entered PIN
function submitPIN() {
  if (pinEntered === correctPin) {
    document.getElementById('mainDisplay').innerText = 'PIN Correct';
    document.getElementById('accountDisplay').innerText = 'Choose an option';
    document.getElementById('checkingBalance').innerText = checkingBalance.toFixed(2);
    document.getElementById('savingsBalance').innerText = savingsBalance.toFixed(2);
  } else {
    document.getElementById('mainDisplay').innerText = 'Incorrect PIN';
    setTimeout(() => {
      pinEntered = '';
      document.getElementById('mainDisplay').innerText = 'Please Enter PIN';
    }, 1500);
  }
}

// Start Deposit process
function startDeposit() {
  document.getElementById('mainDisplay').innerText = 'Enter Deposit Amount';
  // Switch to deposit mode
  currentAccount = prompt("Enter the account (checking/savings):").toLowerCase();
}

// Start Withdraw process
function startWithdraw() {
  document.getElementById('mainDisplay').innerText = 'Enter Withdrawal Amount';
  // Switch to withdraw mode
  currentAccount = prompt("Enter the account (checking/savings):").toLowerCase();
}

// Check account balance
function checkBalance() {
  let balance = currentAccount === 'checking' ? checkingBalance : savingsBalance;
  document.getElementById('mainDisplay').innerText = 'Balance: $' + balance.toFixed(2);
}

// Update balance based on entered number
function updateBalance(amount) {
  if (currentAccount === 'checking') {
    checkingBalance += amount;
    document.getElementById('checkingBalance').innerText = checkingBalance.toFixed(2);
  } else if (currentAccount === 'savings') {
    savingsBalance += amount;
    document.getElementById('savingsBalance').innerText = savingsBalance.toFixed(2);
  }
}

// Handle deposit amount
function handleDeposit() {
  let depositAmount = parseFloat(pinEntered);
  if (!isNaN(depositAmount) && depositAmount > 0) {
    updateBalance(depositAmount);
    document.getElementById('mainDisplay').innerText = `Deposited $${depositAmount.toFixed(2)} to ${currentAccount} account.`;
  } else {
    document.getElementById('mainDisplay').innerText = 'Invalid Deposit Amount';
  }
  pinEntered = '';
}

// Handle withdrawal amount
function handleWithdraw() {
  let withdrawAmount = parseFloat(pinEntered);
  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    if (currentAccount === 'checking' && withdrawAmount <= checkingBalance) {
      updateBalance(-withdrawAmount);
      document.getElementById('mainDisplay').innerText = `Withdrew $${withdrawAmount.toFixed(2)} from checking.`;
    } else if (currentAccount === 'savings' && withdrawAmount <= savingsBalance) {
      updateBalance(-withdrawAmount);
      document.getElementById('mainDisplay').innerText = `Withdrew $${withdrawAmount.toFixed(2)} from savings.`;
    } else {
      document.getElementById('mainDisplay').innerText = 'Insufficient funds';
    }
  } else {
    document.getElementById('mainDisplay').innerText = 'Invalid Withdrawal Amount';
  }
  pinEntered = '';
}


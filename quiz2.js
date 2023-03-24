// Import the data.json file
const data = require('./data.json');

// Function to get array of active accounts only
function getActiveAccounts(accounts) {
  return accounts.filter(account => account.isActive);
}

// Function to get the highest balance. Function should return balance string value
function getHighestBalance(accounts) {
  const highestBalance = accounts.reduce((acc, account) => {
    return account.balance > acc ? account.balance : acc;
  }, 0);
  return highestBalance.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

// Function to get array of friends of all accounts. Function should return array names
function getAllFriends(accounts) {
  const friends = accounts.flatMap(account => account.friends.map(friend => friend.name));
  return Array.from(new Set(friends));
}

// Function to get string of account holders names. Function should return a single string with comma separated names
function getAccountHolderNames(accounts) {
  const accountHolderNames = accounts.map(account => account.name);
  return accountHolderNames.join(', ');
}

// Usage
const activeAccounts = getActiveAccounts(data);
console.log(activeAccounts);

const highestBalance = getHighestBalance(data);
console.log(highestBalance);

const allFriends = getAllFriends(data);
console.log(allFriends);

const accountHolderNames = getAccountHolderNames(data);
console.log(accountHolderNames);

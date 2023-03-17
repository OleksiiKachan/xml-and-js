/**
 * n01551519 Rutwa Dave
 */

const data = require('./data.json')

//function to get active accounts
function activeAccounts(data) {
    const accounts = data.filter(account => account.isActive);
    return accounts;
}

console.log(activeAccounts(data));

//function to get highest balance
function highestBalance(data) {
    const highestBalance = data
        .map(account => account.balance)
        .reduce((max_balance, balance) => Math.max(max_balance, balance), 0);

    return highestBalance.toFixed(2);
}

console.log("\nHighest Balance is:" + highestBalance(data));

//to get friends of all accounts
function friends(data) {
    const friendsList = data
        .map(account => account.friends)
        .reduce((totalFriends, friends) => totalFriends.concat(friends), [])//array of all friennds
        .map(friend => friend.name);

    return friendsList;
}

console.log("\nList of friends:\n"+ friends(data));



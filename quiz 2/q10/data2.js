const gettingTheHighestBalance = (data) => {
    const gAllBalances = data.map(function(account) {
        return account.balance;
    }); //getting all of the balances

    const gHighestBalance = gAllBalances.reduce(function(maxBalance, balance) {
        return Math.max(maxBalance, balance);
    }, 0); //reducing the array for finding the highest among them using reduce() method and returning it as a string
            //with the help of toFixed() method for two decimal points.

    return gHighestBalance.toFixed(2);
  }

const data = require('./data.json');

const hBalance = gettingTheHighestBalance(data);

console.log(hBalance);
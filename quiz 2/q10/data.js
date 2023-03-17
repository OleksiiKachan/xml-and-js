const gActiveAccounts = (data) => {
    return data.filter(account => {
        return account.isActive;
    });
}

// filter() method that'll create a neew array which will contain the objs where isActive is true.

const data = require('./data.json');

const aAccounts = gActiveAccounts(data);

console.log(aAccounts);
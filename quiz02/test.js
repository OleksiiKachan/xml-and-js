// Create functions to parse data from data.json.

const fs = require("fs");

var data_str = fs.readFileSync("./quiz02/data.json");

const data = JSON.parse(data_str);

console.log("\n--------active_accounts--------\n");

// Function to get array of active accounts only

const active_accounts = data.filter((row) => (row.isActive = true));

console.log(active_accounts);

// Function to get the highest balance. Function should return balance string value

console.log("\n--------highest_balance--------\n");

const highest_balance = data

  .map((row) => row.balance)

  .reduce((accmulator, row) => {
    if (row > accmulator) {
      accmulator = row;
    }

    return accmulator;
  }, 0);

console.log("highest_balance:" + highest_balance); //3038.94

// Function to get array of friends of all accounts. Function should return array names

console.log("\n--------friend_names--------\n");

const friend_names = data

  .map((row) => row.friends)

  .reduce((acc, row) => {
    const name = row.map((r) => r.name);

    return acc.concat(name);
  }, []);

console.log("friend_names:" + friend_names);

// console.log(typeof friend_names);

// Function to get string of account holders names. Function should return a single string with comma separated names

console.log("\n--------holder_names--------\n");

const holder_names = data

  .map((row) => row.name)

  .reduce((acc, row) => {
    // console.log(row);

    acc += "," + row;

    return acc;
  }, "")

  .slice(1);

console.log("holder_names:" + holder_names); //holder_names:Hobbs Macdonald,Nelda Sykes,Shaw Walls,Boyer Riley,George Snider

console.log(typeof holder_names); //string

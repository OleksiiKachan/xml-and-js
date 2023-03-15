
// Create functions to parse data from data.json.
const fs = require("fs");
var data_str = fs.readFileSync("./quiz02/data.json");

const data = JSON.parse(data_str);
// console.log(data);

// var data = [
//   {
//     isActive: false,

//     balance: 1343.69,

//     name: "Hobbs Macdonald",

//     registered: "2015-02-08T02:36:36 +05:00",

//     latitude: -80.356177,

//     longitude: -125.276756,

//     friends: [
//       {
//         id: 0,

//         name: "Hart Guthrie",
//       },

//       {
//         id: 1,

//         name: "Kasey Gomez",
//       },
//     ],
//   },

//   {
//     isActive: false,

//     balance: 2426.98,

//     name: "Nelda Sykes",

//     registered: "2015-02-01T10:16:00 +05:00",

//     latitude: 72.078718,

//     longitude: -159.71397,

//     friends: [
//       {
//         id: 0,

//         name: "Sullivan Preston",
//       },

//       {
//         id: 1,

//         name: "Mcgee James",
//       },
//     ],
//   },

//   {
//     isActive: true,

//     balance: 1257.12,

//     name: "Shaw Walls",

//     registered: "2018-08-26T02:26:15 +04:00",

//     latitude: -76.647851,

//     longitude: 173.881151,

//     friends: [
//       {
//         id: 0,

//         name: "Reyna Wilkins",
//       },

//       {
//         id: 1,

//         name: "Deann Christensen",
//       },
//     ],
//   },

//   {
//     isActive: true,

//     balance: 1431.44,

//     name: "Boyer Riley",

//     registered: "2018-09-24T10:12:16 +04:00",

//     latitude: -60.360275,

//     longitude: 19.826812,

//     friends: [
//       {
//         id: 0,

//         name: "Steele Coleman",
//       },

//       {
//         id: 1,

//         name: "Darcy Dixon",
//       },
//     ],
//   },

//   {
//     isActive: false,

//     balance: 3038.94,

//     name: "George Snider",

//     registered: "2017-09-25T09:12:43 +04:00",

//     latitude: -67.814834,

//     longitude: -145.045949,

//     friends: [
//       {
//         id: 0,

//         name: "Irene Rivers",
//       },

//       {
//         id: 1,

//         name: "Dora Hart",
//       },
//     ],
//   },
// ];

console.log("\n--------active_accounts--------\n");

// Function to get array of active accounts only

const active_accounts = data.filter((row) => (row.isActive));

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

    // console.log(acc);

    name.forEach((element) => {
      acc.push(element);
    });

    return acc;
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

const data = [
    {
        isActive: false,
        balance: 1343.69,
        name: "Hobbs Macdonald",
        registered: "2015-02-08T02:36:36 +05:00",
        latitude: -80.356177,
        longitude: -125.276756,
        friends: [
            {
                id: 0,
                name: "Hart Guthrie"
            },
            {
                id: 1,
                name: "Kasey Gomez"
            }
        ]
    },
    {
        isActive: false,
        balance: 2426.98,
        name: "Nelda Sykes",
        registered: "2015-02-01T10:16:00 +05:00",
        latitude: 72.078718,
        longitude: -159.71397,
        friends: [
            {
                id: 0,
                name: "Sullivan Preston"
            },
            {
                id: 1,
                name: "Mcgee James"
            }
        ]
    },
    {
        isActive: true,
        balance: 1257.12,
        name: "Shaw Walls",
        registered: "2018-08-26T02:26:15 +04:00",
        latitude: -76.647851,
        longitude: 173.881151,
        friends: [
            {
                id: 0,
                name: "Reyna Wilkins"
            },
            {
                id: 1,
                name: "Deann Christensen"
            }
        ]
    },
    {
        isActive: true,
        balance: 1431.44,
        name: "Boyer Riley",
        registered: "2018-09-24T10:12:16 +04:00",
        latitude: -60.360275,
        longitude: 19.826812,
        friends: [
            {
                id: 0,
                name: "Steele Coleman"
            },
            {
                id: 1,
                name: "Darcy Dixon"
            }
        ]
    },
    {
        isActive: false,
        balance: 3038.94,
        name: "George Snider",
        registered: "2017-09-25T09:12:43 +04:00",
        latitude: -67.814834,
        longitude: -145.045949,
        friends: [
            {
                id: 0,
                name: "Irene Rivers"
            },
            {
                id: 1,
                name: "Dora Hart"
            }
        ]
    }
];
console.log(">>>>>>>>>>>>>Active Accounts>>>>>>>>>>>");
const janki = data.filter((j) => j.isActive === true);
console.log(janki);



console.log(">>>>>>>>>>>>>>>Maximum Balance>>>>>>>>>>");
const getbalance = data.map((j) => {
    return j.balance
});//get balance
const mbalance = getbalance.reduce((accum, a) => {
    return Math.max(accum, a);
}, 0);//reduce balance max 

console.log("maximum balance : " +mbalance);


console.log(">>>>>>>>>>>>>List of Friends>>>>>>>>>>>>");
const removeholes = data.flat((listData) => listData.friends);//use flat function to remove holes
const friendData = removeholes.map((N) => {
    return N.name
});//after flatting need map to get friends details as we have one arary

console.log(friendData);
console.log("******************Comma Seperated****************");
const AccountName = data.map((a) => {
    return a.name
});
let commavalue = AccountName.join(", ");//o use comma with join
console.log(commavalue);
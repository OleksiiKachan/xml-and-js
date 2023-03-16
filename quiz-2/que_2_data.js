const data = [
    {
      "isActive": false,
      "balance": 1343.69,
      "name": "Hobbs Macdonald",
      "registered": "2015-02-08T02:36:36 +05:00",
      "latitude": -80.356177,
      "longitude": -125.276756,
      "friends": [
        {
          "id": 0,
          "name": "Hart Guthrie"
        },
        {
          "id": 1,
          "name": "Kasey Gomez"
        }
      ]
    },
    {
      "isActive": false,
      "balance": 2426.98,
      "name": "Nelda Sykes",
      "registered": "2015-02-01T10:16:00 +05:00",
      "latitude": 72.078718,
      "longitude": -159.71397,
      "friends": [
        {
          "id": 0,
          "name": "Sullivan Preston"
        },
        {
          "id": 1,
          "name": "Mcgee James"
        }
      ]
    },
    {
      isActive: true,
      "balance": 1257.12,
      "name": "Shaw Walls",
      "registered": "2018-08-26T02:26:15 +04:00",
      "latitude": -76.647851,
      "longitude": 173.881151,
      "friends": [
        {
          "id": 0,
          "name": "Reyna Wilkins"
        },
        {
          "id": 1,
          "name": "Deann Christensen"
        }
      ]
    },
    {
      isActive: true,
      "balance": 1431.44,
      "name": "Boyer Riley",
      "registered": "2018-09-24T10:12:16 +04:00",
      "latitude": -60.360275,
      "longitude": 19.826812,
      "friends": [
        {
          "id": 0,
          "name": "Steele Coleman"
        },
        {
          "id": 1,
          "name": "Darcy Dixon"
        }
      ]
    },
    {
      "isActive": false,
      "balance": 3038.94,
      "name": "George Snider",
      "registered": "2017-09-25T09:12:43 +04:00",
      "latitude": -67.814834,
      "longitude": -145.045949,
      "friends": [
        {
          "id": 0,
          "name": "Irene Rivers"
        },
        {
          "id": 1,
          "name": "Dora Hart"
        }
      ]
    }
  ];
 
console.log("Que-1")
function ActiveAccounts(data) {
    const filterData = data.filter((items) => 
    items.isActive == true
);
    return filterData;
}
console.log(ActiveAccounts(data));

console.log("Que-2")
function Maximum_balance(data) {
    const high = data.reduce((max, c) => {
        if (max > c.balance) {
            return c.balance;
        }
        else {
            return c.balance;
        }
    }, 0);
    return high;
}
console.log("Highest Balance is: ", Maximum_balance(data));

console.log("Que-3")
function Friend_Array(data) {
    const friend = data.map((i) => i.friends);
    return friend;
}
console.log('Friends: ', Friend_Array(data));

console.log("Que-4")
function Account_Holders(data) {
    const Account_Name = data.map((i) => i.name);
    return Account_Name;
}
console.log(Account_Holders(data).join(" ,"));


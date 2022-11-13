const info = [
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
      "isActive": true,
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
      "isActive": true,
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
  ]

  console.log("--- ARRAY OF ACTIVE USERS ---")
const getActive = () => {
    return info.filter(x => x.isActive)
}
console.log(getActive());

console.log("--- MAXIMUM BALANCE ---")
const getMaxBalance = () => {
    const maxbal = info.reduce((prev, crr) => prev = parseInt(prev) > parseInt(crr.maxbal) ? prev : crr.balance, 0);
    return maxbal.toString();
}
console.log(getMaxBalance());

console.log("--- ARRAY OF FRIENDS OF ALL ACCOUNTS ---")
const getNameofFriends = () => {
    return info.reduce((prev, crr) => prev = [...prev, ...(crr.friends.map(e => e.name))] , [])
}
console.log(getNameofFriends());


const getAccHolderNames = () => {
    const accname = info.map(x => x.name);
    return accname.join(', ')
}

console.log("--- ACCOUNT HOLDERS NAME ---")
console.log(getAccHolderNames());
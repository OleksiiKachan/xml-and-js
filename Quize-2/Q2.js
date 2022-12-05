const friendsall = [
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
  
  
console.log("Source file:");
console.log(friendsall);
console.log(`-----------`);
console.log(`1. Getting accounts with active status`);
console.log(`-----------`);
const activeuser= friendsall.filter((friend) => friend.isActive === true);

console.log(activeuser);
console.log(" ------------- ");
console.log("2. Highest balance");
  const maximum = friendsall
  .map((data) => data.balance)
  .reduce((acc, value) => {
    if(acc < value)
        acc=value;
    return acc;
  }, null);
  console.log(maximum);
/*const balance = data.reduce()
  (acc, {balance}.) => (acc > value ? acc : value),0
  );
*/
  console.log(" ------------- ");
console.log(" 3. friends array name ")
const dataoffriends = friendsall.flatMap(allD => allD.friends);
const names=dataoffriends.map(f => f.name);
console.log(names);

/*

*/
  console.log(" ------------- ");
  console.log(" 4. All names")

  const nameall = friendsall.reduce ((acc,value) => {
    if(acc == "")
        return acc += value.name;
    else
        return acc += ","+ value.name ;
  },"");
console.log(nameall);
/*
const names = data.map(({name}) => name).join(", ");*/



/*console.log("----------data of trips variable----------");
const trips = allData.map((data) => {
    return (data.trips)
    });
console.log(trips);
//allData.reduce()
const totaltrips = allData.reduce((accum, all) => {
  return accum + all.trips;
}, 0);
*/
const data = [
    {
      isActive: false,
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
      isActive: false,
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
      isActive: "true",
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
      isActive: "true",
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
      isActive: false,
      balance: 3038.94,
      name: "George Snider",
      "registered": "2017-09-25T09:12:43 +04:00",
      "latitude": -67.814834,
      "longitude": -145.045949,
      friends: [
        {
          "id": 0,
          name: "Irene Rivers"
        },
        {
          "id": 1,
          "name": "Dora Hart"
        }
      ]
    }
  ]
  
// Function to get array of active accounts only


const arr = data.filter((d) => d.isActive === "true");
console.log("Function to get array of active accounts only");
console.log(arr);


// Function to get the highest balance. Function should return balance string value

 const bal = data.map((d) => {
        return   d.balance
    });

  const maxmad = bal.reduce((accum, r) => {
    
    return Math.max(accum, r);
  
  }, 0);

  console.log("Function to get the highest balance. Function should return balance string value");
  console.log(maxmad);

// Function to get array of friends of all accounts. Function should return array names

 const values = data.flatMap((item) => item.friends);

 const frnd = values.map((f) => {
    return f.name
 });

 console.log("Function to get array of friends of all accounts. Function should return array names ");
 console.log(frnd);


 // Function to get string of account holders names. Function should return a single string with comma separated names


 const acc_name = data.map((acc) =>{
    return acc.name
 });

 console.log("Function to get string of account holders names. Function should return a single string with comma separated names ");
 console.log(acc_name);


 
const friends = [
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
;
//1
    const active_accounts = friends.filter((friend) => friend.isActive === true);
    console.log(active_accounts);
//2
    const h_balance1 = () => {
        h1=0;
        const h_balance = friends.map(({balance})=>balance);
        h_balance.forEach((h) => {
            if(h > h1){
                h1=h;
            }
        }
        );
        
        return JSON.stringify(h1);
    }
    const hb = h_balance1();
 
//3
//const friends_parsed = JJSON.parse( friends);
friend_names = [];
friends.forEach((friend) => {
  friend.friends.forEach((f)=>{
    friend_names.push(f.name);
  })
});
// const friend_names = friends.map((friend) => {
//     return (friend.map((fr)=>{
//         return fr.name;
//     }));
//   });

  console.log(friend_names)

//4
const name_1 = friends.map(({ name }) => name).join(", ");
console.log(name_1)


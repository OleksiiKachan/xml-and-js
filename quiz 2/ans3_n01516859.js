const accounts_data = [
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
          name: "Hart Guthrie",
        },
        {
          id: 1,
          name: "Kasey Gomez",
        },
      ],
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
          name: "Sullivan Preston",
        },
        {
          id: 1,
          name: "Mcgee James",
        },
      ],
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
          name: "Reyna Wilkins",
        },
        {
          id: 1,
          name: "Deann Christensen",
        },
      ],
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
          name: "Steele Coleman",
        },
        {
          id: 1,
          name: "Darcy Dixon",
        },
      ],
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
          name: "Irene Rivers",
        },
        {
          id: 1,
          name: "Dora Hart",
        },
      ],
    },
  ];
  
  
  const active_accounts = accounts_data.filter((data) => data.isActive == true);
  
  const highestBalance = accounts_data
    .map((account) => account.balance)
    .reduce((highest_balance, account) => {
      if (highest_balance < account) {
        highest_balance = account;
      }
      return highest_balance;
    }, 
    0);
  
  const friends = accounts_data
    .map((account) => account.friends)
    .reduce((allFriends, friends) => allFriends.concat(friends), [])
    .map((friend) => friend.name);
  
  const AccountHolderNames = (accounts_data) => {
    const names = accounts_data.map((account) => account.name);
    const lastIndex = names.length - 1;
    return names.reduce((allNames, name, index) => {
      if (index === 0) {
        return name;
      } else if (index === lastIndex) {
        return `${allNames}, and ${name}`;
      } else {
        return `${allNames}, ${name}`;
      }
    }, "");
  };
  
  console.log("----------1)");
  console.log(active_accounts);
  console.log("============================");
  console.log("----------2");
  console.log("Highest balance " + highestBalance);
  console.log("===========================");
  console.log("---------3");
  console.log("Friend's accounts : " + friends);
  console.log("===========================");
  console.log("---------4");
  console.log(AccountHolderNames(accounts_data));
  
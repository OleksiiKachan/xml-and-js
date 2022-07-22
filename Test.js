const users = [

  { username: `user1`, email: `user1@email.com` },

  { username: `user2`, email: `user2@email.com` }

  ];

  

  const getUser = (username) =>

    new Promise((resolve) => {

    // get user data by username from users array

    for(let user of users){

      if(user.username === username){

        resolve(user);

      }

    }

  });

  

  const getUsers = (userNames) => {

    // Create an empty array

    const users = [];

    // get all users for usernames passed as argument

    userNames.forEach(name => getUser(name).then((user) => users.push(user)));

    return users;

  };

  

  const main = async () => {

    const userNames = [`user1`, `user2`];

    const users = await getUsers(userNames);

    console.log(users);

  };

  

  main();
const users = [

    { username: `user1`, email: `user1@email.com` },

    { username: `user2`, email: `user2@email.com` }

    ];

   

    const getUser = () =>

    new Promise((resolve) => {

    // get user data by username from users array
    const name = users.map((officer) => {
    return officer.username;
    });
    resolve(name);

});   

    const getUsers = (userNames) => {

         const users = [];
     
        userNames.forEach(janki => getUser(janki).then((user) => users.push(user)));

        return users;

    };

   

    const main = async () => {

        const userNames = [`user1`];

        const users = await getUsers(userNames);

        console.log(users);

    };
  

    main();
const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    const getUser = (username) =>
    
   new Promise((resolve) => {
    
    // get user data by username from users array
    for(let data of users){
        if(data.username === username){
            resolve(data);
        }
    }
    
    });
    const getUsers = (userNames) => {
    
    // get all users for usernames passed as argument
    const users = [];
    userNames.forEach(name => getUser(name).then((data) => users.push(data)));
    return users;
    };
    
    const main = async() => {
    const userNames = [`user1`, `user2`];
    const users = await getUsers(userNames);
    console.log(users);
    
    };
    main();
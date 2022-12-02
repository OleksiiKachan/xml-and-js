const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
    ];
    const getUser = (username) =>
    Promise((resolve) => {
    // get user data by username from users array
    resolve(console.log(username)); 
    
    });
    
    const getUsers = (userNames) => {
    // get all users for usernames passed as argument
    resolve(console.log(userNames))
    };
    
    

    const main = () => {
    const userNames = [`user1`, `user2`];
    const users = getUsers(userNames);
    console.log(users);
    };
    
    
    
    main();
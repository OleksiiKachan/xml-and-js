const users = [
    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    ];
    
    const getUser = (username) =>
    
    new Promise((resolve) => {
    // get user data by username from users array
    for(let u of users){
       if(u.username===username){
        resolve(u);
    }
    }
    });
    
    const getUsers = (userNames) => {
        const users=[];
        // get all users for usernames passed as argument
        userNames.forEach(a=> getUser(a).then((u)=>users.push(u)));
           return users; 
    }; 
    
    const main = async() => {
    const userNames = [`user1`, `user2`];
    const users = await getUsers(userNames);
    console.log(users);
    
    };
    
    main();
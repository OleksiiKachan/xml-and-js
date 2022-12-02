const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    
    
    
    const getUser = (username) =>
    
    Promise((resolve) => {
    
        for (let i=0; i<users.length; i++){
            if(users[i] == username){
                return users[i];
            }
        }
    
    });
    
if(!a)
    
    const getUsers = (userNames) => {
    
    // get all users for usernames passed as argument
    
    };
    
    
    
    const main = () => {
    
    const userNames = [`user1`, `user2`];
    
    
    
    const users = getUsers(userNames);
    
    
    
    console.log(users);
    
    };
    
    
    
    main();
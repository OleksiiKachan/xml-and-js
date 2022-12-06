const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
    ];
    
    
    
    const getUser = (username) =>  Promise((resolve) => {
        const userData = users.filter((user) => user.name === username)
        return userData;
     
    });
  
  
    const getUsers = (userNames) => {
           const names = users.map((user) => {
            return user.name;
          });
       return names
    };
    
        
    const main = () => {
    
    const userNames = [`user1`, `user2`];
       
    const users = getUsers(userNames);
       
    console.log(users)
    
    };
    
       
    main();
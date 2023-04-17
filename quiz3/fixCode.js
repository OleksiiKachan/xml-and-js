/**
 * n01551519
 * Rutwa Dave
 */
const users = [

    { username: `user1`, email: `user1@email.com` },    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    
    const getUser = (username) =>
    
    new Promise((resolve) => {
    
    // get user data by username from users array
    const name=users.find((user)=> user.username===username);
    resolve(name);
    
    });
    
    
    
    const getUsers = (userNames) => {

    // get all users for usernames passed as argument
    const result=userNames.map(username=> getUser(username));
    return Promise.all(result);
    };
    
    
    
    const main = () => {
    
    const userNames = [`user1`, `user2`];
    getUsers(userNames)
    .then(users=> {
        console.log(users);
    })
    };

    main();
    
    
    
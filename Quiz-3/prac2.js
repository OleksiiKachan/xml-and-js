const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
];

const getUser = (username) =>

new Promise((resolve) => {

for (let u of users){
    if(u.username===username){
        resolve(u);
    }
}

});

const getUsers = (userNames) => {

    const users=[];
    userNames.forEach(name=>getUser(name).then((u)=>users.push(u)));

    return users;
    
    };

    const main = async () => {
        const userNames = [`user1`, `user2`];
        const users = await getUsers(userNames);
        console.log(users);
    };

    main();
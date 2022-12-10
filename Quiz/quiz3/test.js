const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
    ];
    
    const getUser = (username) =>
        new Promise((resolve) => {
        for(let u of users){
            if(u.username === username){
                resolve(u);
            }
        }
    });

    const getUsers = (un) => {
        const us = [];
        un.forEach(name => getUser(name).then((u) => us.push(u)));
        return users;
    };
    
    const main = async () => {
        const un = [`user1`, `user2`];
        const us = await getUsers(un);
        console.log(us);
    };
    main();

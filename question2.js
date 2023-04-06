const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
];

// get user data by username from users array
const getUser = (username) => {
    return new Promise((resolve, reject) => {
        const user = users.find(u => u.username === username);
        if (user) {
            resolve(user);
        } else
            reject(`User '${username}' not found`)
    });
   
};

// get all users for usernames passed as argument
const getUsers = async (userNames) => {
    const users = userNames.map(name => getUser(name));
    return Promise.all(users);
    
};

const main = async () => {
    const userNames = [`user1`, `user2`];
    const users = await getUsers(userNames);
    console.log(users);
};
main();
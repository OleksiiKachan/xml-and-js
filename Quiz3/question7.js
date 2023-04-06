//Make this code work
const users = [
{ username: `user1`, email: `user1@email.com` },
{ username: `user2`, email: `user2@email.com` }
];


const getUser = (username) =>
new Promise((resolve) => {
// get user data by username from users array
    const filtered = users.filter((user) => user.username === username)
    resolve(filtered[0])
});

const getUsers = (userNames) => {
// get all users for usernames passed as argument
    const maped = userNames.map((username) => getUser(username));
    return Promise.all(maped);
};



const main = async () => {
    const userNames = [`user1`, `user2`];
    const usersData = await getUsers(userNames);
    console.log(usersData);
};


main();
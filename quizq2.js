const users = [
    {username: 'user1', email: 'user1@gmail.com'},
    {username: 'user2', email: 'user2@gmail.com'}
];

const getUser = (username) => 
  new Promise((resolve) => {
    const user = users.find((user) => user.username == username);
    resolve(user);

  });

const getUsers = (userNames) => 
  Promise.all(userNames.map((username) => getUser(username)));

const main = async () => {
    const userNames = ['user1', 'user2'];
    const users = await getUsers(userNames);
    console.log(users);
};  

main();

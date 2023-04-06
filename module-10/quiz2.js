const users = [
  { username: `user1`, email: `user1@email.com` },
  { username: `user2`, email: `user2@email.com` },
];
const getUser = (username) => {
  return new Promise((resolve) => {
    // Find user data by username from users array
    const user = users.find((user) => user.username === username);
    resolve(user);
  });
};

const getUsers = (userNames) => {
  const userPromises = userNames.map((username) => getUser(username));
  return Promise.all(userPromises);
};

const main = async () => {
  const userNames = [`user1`, `user2`];
  const users = await getUsers(userNames);
  console.log(users);
};

main();

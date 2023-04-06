const users = [
  { username: `user1`, email: `user1@email.com` },
  { username: `user2`, email: `user2@email.com` },
];

const getUser = (username) =>
  new Promise((resolve) => {
    // get user data by username from users array
    const user_obj = users.find((item) => item.username == username); //find obj
    resolve(`${user_obj.username} - ${user_obj.email}`);
  });

const getUsers = async (userNames) => {
  // get all users for usernames passed as argument
  const userInfo = await Promise.all(userNames.map(userName=> getUser(userName)));
  return userInfo.join(" , ");
};

const main = async () => {
  const userNames = [`user1`, `user2`, `user3`];
  const users = await getUsers(userNames);
  console.log(users);
};

main(); // user1 - user1@email.com , user2 - user2@email.com

// // TEST getUser()
// var username = "user1";
// // getUser(username).then((data) => console.log(data));

// // test getUsers()

// var un_list = [`user1`, `user2`];
// getUsers(un_list).then((data) => console.log(data));

const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
  ];
  
  const EachUser = (username) => {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.username === username);
      if (user) {
        resolve(user);
      } else {
        reject(`Not found`);
      }
    });
  };
  
  const UserList = (userNames) => {
    const promises = userNames.map(
        (username) => EachUser(username));
    return Promise.all(promises);
  };
  
  const main = () => {
    const userNames = [`user1`, `user2`];
    const users = UserList(userNames);
    users.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  };
  
  main();
  
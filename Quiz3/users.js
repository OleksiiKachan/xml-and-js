const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
  ];
  
  const getUser = (username) => {
    return new Promise((resolve) => {
      const user = users.find(u => u.username === username);
      resolve(user);
    });
  };
  
  const getUsers = (userNames) => {
    const promises = userNames.map(username => getUser(username)); //mapping unserNames to promise 
    return Promise.all(promises);
  };
  
  const main = async () => {
    const userNames = [`user1`, `user2`];
    const users = await getUsers(userNames);
    console.log(users);
  };
  
  main();
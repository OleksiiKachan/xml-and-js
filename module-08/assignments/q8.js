const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
  ];
  
  const getUser = (username) => {
    return new Promise((resolve) => {
      const user = users.find((v) => v.username === username);
      resolve(user);
    });
  };
  
  const getUsers = (userNames) => {
    const data = userNames.map((username) => getUser(username));
    return Promise.all(data);
  };
  
  const main = async () => {
   const userNames =[`user1`, `user2`];
  const users =await getUsers(userNames);
  console.log(users);
  };
  
  main();
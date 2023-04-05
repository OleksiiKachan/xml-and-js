const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
  ];
  
// Define a function to retrieve a user by their username
  const getUser = (username) => {
    // Find user with given username
    const user = users.find(user => user.username === username);
  
    // Return a promise that resolves with user data
    return new Promise((resolve) => {
      resolve(user);
    });
  };
  
  const getUsers = (userNames) => {
    // Map array of usernames to array of promises that resolve to user data
    const userPromises = userNames.map(username => getUser(username));
  
    // Return a promise that resolves with an array of user data
    return Promise.all(userPromises);
  };
  
  const main = async () => {
    const userNames = [`user1`, `user2`];
  
    const users = await getUsers(userNames);
  
    console.log(users);
  };
  
  main();
  
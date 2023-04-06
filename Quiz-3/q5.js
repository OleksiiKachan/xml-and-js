const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
];
    
const getUser = (username) => {
    return new Promise((resolve, reject) => {
      const user = users.find(user => user.username === username);
      if (user) {
        resolve(user);
      } else {
        reject(new Error(`Could not find the user!: ${username}`));
      }
    });
  };
/*
This function accepts a username and returns a Promise that resolves with the user data for that 
username or rejects with an error if no matching user is found.
*/
    
const getUsers = (userNames) => {
    const promises = userNames.map(username => getUser(username));
    return Promise.all(promises);
};
/*
This function accepts an array of usernames and returns a Promise that resolves with an array of user data 
for those usernames. It creates an array of Promises by calling the getUser function for each username 
using the map method. The function then waits for all the Promises to resolve using 
Promise.all and returns their resolved values as an array.
*/
    
const main = () => {
    const userNames = [`user1`, `user2`];
    getUsers(userNames).then(users => {
        console.log(users);
    });
};
    
main();
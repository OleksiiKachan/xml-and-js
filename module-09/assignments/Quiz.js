// function func(...args) {
//     return new Promise((resolve, reject) => {
//       if (args.length === 0) {
//         reject("No arguments are passed.");
//       } else {
//         resolve(args);
//       }
//     });
//   }
  
//   func(1, 2, 3)
//     .then((output) => console.log(output))
//     .catch((error) => console.error(error));
  
//   func("value", 15, {})
//     .then((output) => console.log(output))
//     .catch((error) => console.error(error));
  
//   func()
//     .then((output) => console.log(output))
//     .catch((error) => console.error(error));



// const func1 = new Promise((resolve) => resolve(`func1`));
// const func2 = new Promise((resolve) => resolve(`func2`));
// const func3 = new Promise((resolve) => resolve(`func3`));
// const main = () => {
//   const promises = [func1, func2, func3];

//   Promise.all(promises).then((results) => {
//     console.log(results);
//   });
// };
// main();



// const users = [
//     { username: "user1", email: "user1@email.com" },
//     { username: "user2", email: "user2@email.com" },
//   ];
  
//   const getUser = (username) => {
//     return new Promise((resolve) => {
//       const user = users.find((user) => user.username === username);
//       resolve(user);
//     });
//   };
  
//   const getUsers = (userNames) => {
//     const promises = userNames.map((username) => getUser(username));
//     return Promise.all(promises);
//   };
  
//   const main = async () => {
//     const userNames = ["user1", "user2"];
//     const users = await getUsers(userNames);
//     console.log(users);
//   };
  
//   main();

  
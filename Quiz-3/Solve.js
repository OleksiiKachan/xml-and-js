//Q1.

// const func1 = new Promise((resolve) => resolve(`func1`));

// const func2 = new Promise((resolve) => resolve(`func2`));

// const func3 = new Promise((resolve) => resolve(`func3`));



// const main = () => {

// // call func1, func2, and func3. wait until ALL of them are resolve and console.log resolved result

// }

// const func1 = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`func1`);
//       }, 1500);
//     });
//   };
  
//   const func2 = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`func2`);
//       }, 1500);
//     });
//   };
  
//   const func3 = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`func3`);
//       }, 1500);
//     });
//   };
  
//   const main = () => {
//     Promise.all([func1(), func2(), func3()])
//       .then((output) => console.log(output.join(', ')))
//       .catch((error) => console.log(error));
//   }
//   main(); 
  

//Q3.

// const users = [
//     { username: `user1`, email: `user1@email.com` },
//     { username: `user2`, email: `user2@email.com` }
//   ];
  
//   const getUser = (username) =>
//     new Promise((resolve) => {

//       const user = users.find((user) => user.username === username); // Look for user data by username from users array
//       resolve(user);
//     });
  
//   const getUsers = (userNames) => {
  
//     const Upromises = userNames.map((username) => getUser(username));  
//     return Promise.all(Upromises); // resolve all the promises when all users have been fetched
//   };
  
//   const main = async () => {
//     const userNames = [`user1`, `user2`];
//     const users = await getUsers(userNames);
//     console.log(users);
//   };
  
//   main();


//Q4.Create a function that returns a promise that on resolve returns the array of arguments of this function. Reject if no arguments are passed

// e.g.

// await func(1,2,3) => should return 1,2,3

// await func(`value`, 15, {}) => should return `value`, 15, {}

// await func() => should throw error

// function func(...args) {
//     return new Promise((resolve, reject) => { 

//      if (args.length > 1) { 
//       resolve(args); 
//     } else { 
//       reject(new Error('No Arguments Passed!')); 
//     } 
//    });
// }

// function func(...args) {
//     return new Promise((resolve, reject) => { 
//       if (args.length > 1) { 
//         resolve(args.join(', ')); // Join array elements with a comma and space
//       } else { 
//         reject(new Error('No Arguments Passed!')); 
//       } 
//     });
//   }
  
  
// (async () => { 
//     try { 
//      const test1 = await func(1, 2, 3); 
//      console.log(test1); 
//    } catch (error) { 
//      console.log(error); 
//    } 
//   })
//   ();

// (async () => { 
//     try { 
//      const test2 = await func("value", 15, {}); 
//      console.log(test2); 
//    } catch (error) { 
//      console.log(error); 
//    } 
//   })
//   ();
 
// (async () => { 
//     try { 
//      const test3 = await func(); 
//      console.log(test3); 
//    } catch (error) { 
//      console.log(error);
//    } 
//   })
//   ();



// const main = () => {
//     const data = await loadData();
//     console.log(data.length);
    
//     };
//     const length = main();
//     console.log(length);

    //SyntaxError: await is only valid in async functions and the top level bodies of modules



    new Promise((resolve, reject) => {

        resolve('Success!')
        
        })
        
        .then(() => {
        
        throw Error('Oh no!')
        
        })
        
        .catch(error => {
        
        return "actually, that worked"
        
        })
        
        .catch(error => console.log(error.message))






    // const p = new Promise((resolve, reject) => {

    //     resolve({ message: 'this is error!'})
        
    //     })
        
    //     p.then(error => console.log(error.message))
        
    //     p.catch(error => console.log(error.message))

        // print this is error!

        


        // Re-throw the error
        throw error;
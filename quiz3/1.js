const wait = (ms=1000) => new Promise((resolve) => setTimeout(resolve, ms));


    const func1 = new Promise((resolve) => resolve(`func1`));
    const func2 = new Promise((resolve) => resolve(`func2`));
    const func3 = new Promise((resolve) => resolve(`func3`));
    const main = () => {
    
    // call func1, func2, and func3. wait until ALL of them are resolve and console.log resolved result
    Promise.all([func1, func2, func3]).then((values) => console.log(values)
    )};
    main();



    // const arrayFunc = async function (a, b, c) {
    //     new Promise((resolve, reject) => {
    //         if(a!= undefined && b!=undefined && c!=undefined)
    //         {
    //             resolve (a, b, c);
    //             console.log(a, b, c);
    //         }
    //         else
    //         {
    //             reject("Error");
    //         }
    //       });
    // }
    // main = async () => {
        
    //     await arrayFunc (1, 2, 3) 
    //     // await fun(`value`, 15, {})
    //     // await fun()
    // }
    // main();




// const users = [
//     { username: `user1`, email: `user1@email.com` },
//     { username: `user2`, email: `user2@email.com` }
//     ];
//     const getUser = (username) =>
//     Promise((resolve) => {
//     // get user data by username from users array
//     for(let user of users){
//         if(user.username == username){
//             return user;
//         }
//     }
//     });
    
//     const getUsers = (userNames) => {
//     // get all users for usernames passed as argument

    
//     };
//     const main = () => {
//     const userNames = [`user1`, `user2`];
//     const users = getUsers(userNames);
//     console.log(users);
//     };
//     main();
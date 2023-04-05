//initializing array of objects with username and emailaddress
const users = [

    { username: "user1", email: "user1@email.com" },
    
    { username: "user2", email: "user2@email.com" }
    
    ];
    
    
   //function getUser takes username as an argument and return Promise 
    const getUser = (username) => {
    return new Promise((resolve) => {
    const user = users.find((user) => user.username === username); //method find is used to match the username from the userobject
    resolve (user);
    // get user data by username from users array
    
    });
};
    
    
    //function getUsers takes array of userNames as an argument and returns a promise that resolves with an array of
    // user objects matching with the given usernames
    const getUsers = (userNames) => {
    const promises = userNames.map((username) => getUser(username)); //Here I have used map over the userNames array and getUser function is called 
    // for each username ,it returns a Promise
    return Promise.all(promises); // array of promises is passed to promise.all() which waits for all promises to resolve and return 
    //an array of resolved values
     };
    
    
    
    const main = async () => { //main function is an asynchronous function
    
    const userNames = ["user1", "user2"]; //It defines array of userNames
    
    const users = await getUsers(userNames); //calls getUsers with that array and waits for the returned promise to resolve with array of user objects.
    
    console.log(users);
    
    };
    
    
    
    main();
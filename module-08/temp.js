const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    
    
    
    const getUser = (username) =>
    
    Promise((resolve) => {
    
    // get user data by username from users array
    const newuser = [{}];
if(username[0] == users.filter((user) => user.data === "user1")){
    newuser.append(user);
}
if(username[0] == users.filter((user) => user.data === "user2")){
    newuser.append(user);
}
    resolve(newuser);
    
    });
    
    
    
    const getUsers = (userNames) => {
    
    // get all users for usernames passed as argument
    return getUser(userNames);
    };
    
    
    
    const main = () => {
    
    const userNames = [`user1`, `user2`];
    
    
    
    const users = getUsers(userNames);
    
    
    
    console.log(users);
    
    };
    main();
   // const fs = require("fs");
    const function1 = (resolve, reject) => 
    {
        resolve(console.log());
        reject(console.error);
    };
      
/*const question1 = (a,b,c) =>{

    if(a != null && b != null && c!=null){
        const promise = new Promise(function1);
        let returnable = {a,b,c};
        promise.then((returnable) => console.log(returnable));
    }
    else{
        promise.catch((error) => console.log(error));
    }
    
}*/
//question1(1,2,3);

/*const q3 = (v) =>{
    return new Promise((resolve, reject) =>
    
        resolve("resolved"),

       reject("error")
    );
}
*/
function q3(...args) => new Promise((resolve,reject)){ 
    
    if(args != null){
        return(promise.then((args) => console.log(args)))
        
    }
    else{
        return(promise.catch((error) => console.log(error)))
    }
    return(promise.catch((error) => console.log(error)));
}
q3(null);
let args1 = [1,2,3];
q3(args1);
let args2 = ['value',15,{}];
q3(args2);

const func1 = new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));



const main2 = () => {

    Promise.all([func1, func2, func3]).then((resolve) =>{

    console.log(resolve[0], resolve[1], resolve[2]);

    });
    
}
    
    
main2();



const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    
    
    
    const getUser = (username) =>
    
    Promise((resolve) => {
    
        const getUserResult = users.map((user) => user.username);
        return username;
    });
    
    
    
    const getUsers = (userNames) => {
    
        const getUsersResult = users.map((users) => {
            return [users.username]});
        return userNames;
    
    };
    
    
    
    const main = () => {
    
    const userNames = [`user1`, `user2`];
    
    const users = getUsers(userNames);
    
    
    
    console.log(users);
    
    };
    
    
    
    main();






   
    const test = async (x,y,z) => {
        const promise = new Promise ((resolve, reject) => {
    
            if  (x,y,z) {
                resolve ([x,y,z]);
            }
       
            else {
                reject ();
            }
            

        });
    
    
        promise.then((resolve)=> console.log(resolve)).catch(() => console.log('Error'));
    
    }

    test(1,2,3); //gives you an array of 1,2,3
    test(`value`, 15, {}) //gives you an array of `value`, 15, {}
    test(); //gives you an Error printed

    
    
    
    
    






const users = [
  { username: `user1`, email: `user1@email.com` },
  
  { username: `user2`, email: `user2@email.com` }
  
  ];
  const getUser = (username) =>
  new Promise((resolve) => {
    // get user data by username from users array
   /*  for(var u of users){
        if(u.username === username){
            resolve(u);
        }
    }*/
    const user = users.filter(user => user.username === username[0]);
    resolve(user);
/*or
    const user = users.find(user => user.username === username);*/
  });
  const getUsers = (userNames) => {
    const newusers = [];
   /*for(var un of userNames)
    {
        const u= getUser(un).then()
        newusers.push(u);
    }
     return newusers;*/
    return Promise.all(userNames.map(username => getUser(username)));
   
  };
    const main =  async() => {  
    const userNames = [`user1`,`user2`];
    const users = await getUsers(userNames);
    console.log(users);
  };
  main();

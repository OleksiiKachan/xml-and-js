const active_accounts = [
    
    { active: false,balance: 1343.69,friends : "id:0,1",name: "Hobbs Macdonald" },
    { active: false,balance: 2426.98,friends : "id:0,1",name: "Nelda Sykes"  },
    { active: true,balance: 1257.12,friends : "id:0,1",name: "Shaw Walls"  },
    { active: true,balance: 1431.44,friends : "id:0,1",name: "Boyer Riley"  },
    { active: false,balance: 3038.94,friends : "id:0,1",name: "George Snider"  },
    

];  

console.log(`Source:`);
console.log(active_accounts);

const active = active_accounts.filter((active_accounts) => active_accounts.faction = true);
const Names = active.map(({ name }) => name); 

console.log(active);
console.log(Names);
const active_account = [
    
    { active: false,balance: 1343.69,friends : "id:0,1",name: "Hobbs Macdonald" },
    { active: false,balance: 2426.98,friends : "id:0,1",name: "Nelda Sykes"  },
    { active: true,balance: 1257.12,friends : "id:0,1",name: "Shaw Walls"  },
    { active: true,balance: 1431.44,friends : "id:0,1",name: "Boyer Riley"  },
    { active: false,balance: 3038.94,friends : "id:0,1",name: "George Snider"  },
    

];  

console.log(`Source:`);
console.log(active_account);

console.log(`-----------`);
console.log(`5 arrays`);
console.log(`-----------`);

console.log(`using .filter()`);
const active_accounts = active_accounts.filter((active_accounts) => active_accounts.faction === true);
const inactive_account = inactive_account.filter((inactive_account) => inactive_account.faction === false);

console.log(active_account);
console.log(inactive_account);

console.log(`using .reduce()`);

const { active_account1, inactive_account1 } = active_account.reduce(
  (accum, active_account) => {
    if (active_account.faction === true) {
      accum.active_account.push(active_account);
    } else if (active_account.faction === false) {
      accum.active_account.push(pilot);
    }

    return accum;
  },
  { active_account: [], inactive_account: [] }
);

console.log(active_account);
console.log(inactive_account);



const names = active_account.map(({name }) => name).join(",");

console.log(names);
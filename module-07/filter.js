const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

console.log(`Source:`);
console.log(pilots);

//const empire = pilots.filter((pilot) => pilot.faction === "Empire");
//const empireNames = empire.map((piolet) => piolet.name);

const {rebels, empire}= pilots.reduce((acc, item) =>{
  if(item.faction === "Empire"){
    //acc.empire.push(item);
    type = `empire`;
  }
  else if(item.faction === "Rebels")
  {
    type = `rebels`;
  }
  if(acc[type] && acc[type].length > 0)
  {
    acc[type] = acc[type] + " , " + item.name;
  }
  else
    acc[type] = item.name;
return acc;
},
{rebels:"", empire:""}
);
console.log("rebels: ");
console.log(rebels);
console.log("empires: ");
console.log(empire);
//const names= rebels.map((item) => item.name).join(",");

/*
chaining functions
const empite = piolts
  .filter((pilot) => pilot.faction === "Empire")
  .map((piolet) => piolet.name);
  */
/*console.log(empire);
console.log(empireNames);

const rebel = pilots
    .filter((pilot) => pilot.faction === "Rebels")
    .map((pilot) => pilot.name);

console.log(rebel);

const total = pilots.reduce((acc, item) => { 
  return acc + item.id;
}, 0);
console.log(total);
/*
const names = pilots.reduce((acc, item) => { 
  if(acc.length > 0)
  {
    return acc + " , " + item.name;
  }
  else
    return item.name;
 
}, "");
console.log(names);
const names2 = pilots.map((item) => item.name).join(", ");

console.log(names2);
*/
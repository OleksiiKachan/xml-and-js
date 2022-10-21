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

const empire = pilots.filter((pilot) => pilot.faction === "Empire");
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(empire);

//const officersname = officers.map(({name})=> name);
//console.log(officersname);

const empname = empire.map(({name})=> name);
const rebname = rebels.map(({name})=> name);

console.log(empname);
console.log(rebname);
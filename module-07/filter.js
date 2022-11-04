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

const empire = pilots.filter((pilot) => pilot.faction === "Empire").map(({name})=>name);
const faction=pilots.filter((pilot)=>pilot.faction==="Rebels");

const empNames = empire.map(({name})=>name);
const factionNames = faction.map(({name})=>name);

console.log(empire);
console.log(faction);
console.log("------------");
console.log(empNames);
console.log("--------");
console.log(factionNames);
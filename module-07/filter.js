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
console.log(`=======================`)
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");


console.log(empire);
console.log(`=======================`)
console.log(rebels);

const empire1 = pilots
.filter((pilot) => pilot.faction === "Empire")
.map(({name}) => name);
console.log(`=======================`)
console.log(empire1);
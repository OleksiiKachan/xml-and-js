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

console.log(empire);

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");

console.log(rebels);

const empirena = empire.map(({ name }) => name);

console.log(empirena);

const rebelsna = rebels.map(({ name }) => name);

console.log(rebelsna);
console.log(`empire6`);
const empire6  = pilots 
.filter ((pilot) => pilot.faction === "Empire")
.map(({name}) => name)
console.log(empire6);
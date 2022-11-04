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

const empire1 = pilots.filter((pilot) => pilot.faction === "Rebels");

console.log(empire1);

const empire2 = empire.map((pilot) => pilot.name);

console.log(empire2);

const empire3 = empire1.map(({name}) => name);

console.log(empire3);
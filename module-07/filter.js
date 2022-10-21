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

const e_names = empire.map(({ name } )=> name);
const r_names = rebels.map(({ name } )=> name);

console.log(empire);

console.log(rebels);

console.log(e_names);

console.log(r_names);

//We can combine map and filter.
const empire1 = pilots.filter((pilot) => pilot.faction === "Empire").map(({ name } )=> name);
console.log(empire1);



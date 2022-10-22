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


console.log(`Empire Pilots:`);
const empire = pilots.filter((pilot) => pilot.faction === "Empire");
console.log(empire);
console.log(`------------`);

console.log(`Empire Pilot Names:`);
const empNames = empire.map(({name}) => name);
console.log(empNames);
console.log(`------------`);


console.log(`Rebel Pilots:`);
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels);
console.log(`------------`);

console.log(`Rebel Pilot Names:`);
const rebNames = rebels.map(({name}) => name);
console.log(rebNames);

//const empires = pilots
//.filter(pilor) =>pilot.faction ==="Empire")
//.map(name) => name);


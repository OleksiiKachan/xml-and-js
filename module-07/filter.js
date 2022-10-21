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
const rebelNames = pilots
  .filter((pilot) => pilot.faction === "Rebels")
  .map(({ name }) => name);

console.log(empire);
console.log(rebels);
console.log(rebelNames)

const { rebelName, empireName } = pilots.reduce( (acc, pilot) => {
  let type;
  if (pilot.faction === "Rebels") {
    type = 'empire'
  } else if (pilot.faction === "Empire") {
    type = 'rebels'
  }

  if (acc[type] && acc[type].length > 0) {
    acc[type] = acc[type] + ", " + pilot.name
  } else {
    acc[type] = pilot.name
  }
  return acc

}, { rebelNames: "", empireNames: "" }) 

console.log(rebelName)
console.log(empireName)


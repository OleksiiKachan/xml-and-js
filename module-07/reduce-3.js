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

const { rebels, empire } = pilots.reduce(
  (acc, item) => {
    if (item.faction === `Empire`) {
      acc.empire.push(item);
    } else if (item.faction === `Rebels`) {
      acc.rebels.push(item);
    }
    return acc;
  },
  { rebels: [], empire: [] }
);

const rebelNames = rebels.map((item) => item.name).join(", ");
const empireNames = empire.map((item) => item.name).join(", ");

console.log(rebels, empire);
console.log(rebelNames, empireNames);

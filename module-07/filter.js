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

// const empire1 = pilots.filter((pilot) => pilot.faction === "Empire");

// console.log(empire1);

// const name1 = pilots.filter((pilot) => pilot.name === "Ciena Ree");
// console.log(name1);

const {rebels, empire} = pilots.reduce((acc, item) => {
  if(item.faction === 'Empire'){
    acc.empire.push(item);
  }else if (item.faction === 'Rebels') {
    acc.rebels.push(item);
  }
  return acc;
},
{
  rebels: [], empire: []
});

const names = rebels.map((item) => item.name).join(", ");
console.log(rebels, empire);










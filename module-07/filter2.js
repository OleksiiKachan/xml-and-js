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

  const empire = pilots.filter((item) => item.faction === `Empire`);
  //const rebels = pilots.filter((item) => item.faction === `Rebels`);

console.log(empire);
//console.log(rebels);

// Display Empire and Rebels with array
console.log('-----------------------------');
const result = pilots.reduce((acc, item) => {
    if (item.faction === `Empire`) {
        acc.empire.push(item);
    } else {
        acc.rebels.push(item);
    }
    return acc; 
}, {empire: [], rebels: []}
);
console.log(result);
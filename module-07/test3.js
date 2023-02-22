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

//   const empire = pilots.filter((item) => item.faction === 'Empire')
//   const Rebels = pilots.filter((item) => item.faction === 'Rebels')

//   const {empire, rebels} = pilots.reduce(
//     (acc, item) => {
//         if (item === 'Empire'){
//             acc.empire.push
//         }
//     } else{
//         acc.rebels.push(item)
//     }
//     return acc;
//     },
//     {empire [], rebels []}
//   )；



  console.log(empire);
  console.log(rebels);

  console.log(empire.map((item) => item.name).join(', '));
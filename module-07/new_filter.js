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

const enew_mpire = pilots.filter((pilot) => pilot.faction === "Rebels").map((pilot) => pilot.name);
const {rebels, empire} = pilots.reduce((acc, item) =>{
    let type;
    if(item.faction === `Empire`){
       // acc.empire.push(item);
      /* if(acc.length > 0){
        acc.empire = acc.empire + " , "+item.name;
       }*/
       type = `empire`;

    }
    else if(item.faction === `Rebels`){
        //acc.rebels.push(item);
        type = `rebels`;
    }
    if(acc[type] && acc[type].length > 0){
        acc[type] = acc[type]+" , "+item.name;
    }
    else{
        acc[type] = item.name;
    }
    return acc;
}, 
    { rebels:"",empire:""}
);

console.log("Result ;");
console.log(rebels, empire);
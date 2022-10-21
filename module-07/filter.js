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

//chain for  both funtion totogether
//const a =pilots
  //.filter((pilots) => pilot.faction =="empire")
  //.map((pilot)=> pilot.name);


const rebel = pilots.filter((pilot) => pilot.faction ==="Rebels")
console.log(rebel);
console.log(empire);



const {rebels, empires } = pilots.reduce((acc,item)=>
{
  if(item.faction="empire")
  {
    acc.empires.push(item);
  }
  else if(item.faction="rebel" )
  {
    acc.rebels.push(item);
  }

  return acc;
},
{rebels : [], empires :[]}
);
console.log("hii");
console.log(rebels, empires);

//const filtered = 


const n= rebels.map((item)=> item.name).json(",");

console.log(n);
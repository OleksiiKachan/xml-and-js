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

console.log(`-----------`);
console.log(`2 arrays`);
console.log(`-----------`);

console.log(`using .filter()`);
const rebels_1 = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire_1 = pilots.filter((pilot) => pilot.faction === "Empire");

console.log(rebels_1);
console.log(empire_1);

console.log(`using .reduce()`);

const { rebels, empire } = pilots.reduce(
  (accum, pilot) => {
    if (pilot.faction === "Rebels") {
      //accum.rebels.push(pilot);
      if(accum.rebels.length>0){
        accum.rebels=accum.rebels+", "+pilot.name;
      }
      
    } else if (pilot.faction === "Empire") {
      //accum.empire.push(pilot);
      if(accum.empire.length>0){
        accum.empire=accum.empire+", "+pilot.name;
      }
      else{
        accum.empire=pilot.name;
      }

    }

    return accum;
  },
  { rebels: [], empire: [] }
);

console.log(rebels);
console.log(empire);

console.log("empire names---------");

const {rebel_names,emp_names}=pilots.reduce()

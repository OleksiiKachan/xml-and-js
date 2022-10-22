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
      accum.rebels.push(pilot);
    } else if (pilot.faction === "Empire") {
      accum.empire.push(pilot);
    }

    return accum;
  },
  { rebels: [], empire: [] }
);

console.log(rebels);
console.log(empire);

console.log(`------------------------`);
const empNames= empire_1.reduce((accum, {name}) =>  {
  if (accum.length > 0){
    return accum + ", " + name;
  }
  else{
    return name;
  }
  }, "");

  console.log(empNames);

  console.log(`------------------------`);
const empNames2 = empire_1.map (({name}) => name).join(", ");
console.log(empNames2);

console.log(`------------------------`);
const rebelNames= rebels_1.reduce((accum, {name}) =>  {
  if (accum.length > 0){
    return accum + ", " + name;
  }
  else{
    return name;
  }
  }, "");

console.log(rebelNames);

console.log(`------------------------`);
const rebelNames2 = rebels_1.map (({name}) => name).join(", ");
console.log(rebelNames2);
console.log(`------------------------`);


//const {rebel, empire} = pilots.reduce(
//(accum, pilot) => {
 // let type;
 // if (pilot.faction === "Rebels") {
 //   type = 'rebels'
 // }
 // else {
 //   type = 'empire'
 // }

 // if (accum[type].lenght > 0){

  //}
//}
//);
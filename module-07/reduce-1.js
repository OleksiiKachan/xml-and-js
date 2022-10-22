const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

console.log("Source:");
console.log(pilots);

const totalYears = pilots.reduce((accum, pilot) => {
  return accum + pilot.years;
}, 0);
console.log(totalYears);


const totalYears_2 = pilots.reduce((accum, pilot) =>  accum + pilot.years, 0);
console.log(totalYears_2);

const totalYears_3 = pilots.reduce((accum, {years}) =>  accum + years, 0);
console.log(totalYears_2);

console.log("Names:");
console.log("--------------------------------");
const names= pilots.reduce((accum, {name}) =>  accum + `, ` + name);
console.log(names);

const names2= pilots.reduce((accum, {name}) =>  {
if (accum.length > 0){
  return accum + ", " + name;
}
else{
  return name;
}
}, "");

console.log(names2);

//const names3 = pilots.map (({name}) => name).join(", ");

//console.log(names3);



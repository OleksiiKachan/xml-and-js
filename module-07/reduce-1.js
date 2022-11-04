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

//console.log(totalYears);

const Allyears = pilots.reduce((tyear, pilot) => {
  return tyear + pilot.years
}, 0)
console.log(Allyears);

const totalYears3 = pilots.reduce((accum, {years}) => accum + years,0)
console.log(totalYears3);


//const names = pilots.reduce((accum, {name}) => accum + name,0)
//console.log(names);

const names2 = pilots.reduce((accum, {name}) => {
  if (accum.length > 0){
    return accum + ", " + name;
  }
  else {
    return name;
  }
}, "");
console.log(names2);

const name_2 = pilots.map(({name})=> name).join(", ");
console.log(name_2);
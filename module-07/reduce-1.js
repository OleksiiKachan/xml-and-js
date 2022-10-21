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

const totalYears1 = pilots.reduce((accum, pilot) => {
  return accum += pilot.years;
}, 0);

const totaly = pilots.reduce((accum, pilot) => {
  return accum += pilot.years;
}, 0);

console.log(totalYears);
console.log(totalYears1);
console.log(totaly);

const ty = pilots.reduce((accum, { years }) => accum + years, 0);
console.log(ty)

const names = pilots.reduce((acc, { name }) => {
  return acc + name
});

console.log(names);

const names_1 = pilots.reduce((acc, { name }) => {
  if (acc.length > 0) {
    return acc + ", " + name;
  }
  else
    return name;
  //return acc + "," + name
}, "");
console.log(names_1);

/*const name_2 = pilots.map({ name }=> name).join(", ");
console.log(names);
console.log(name_2);*/

const name_2 = pilots.map(({ name }) => name).join(", ");
console.log(names);
console.log(name_2);
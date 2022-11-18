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

const totalyears1 = pilots.reduce((accu, {years}) => accu + years,0);

const names = pilots.reduce((acc,{ name })=> {
  if (acc.length > 0) {
    console.log(acc);
    console.log(name);
    return acc + ", " + name;
  }else {
    return name;
  } ""
}, "");

const name_2 = pilots.map(({ name }) => name).join(", ");

console.log(totalYears);
console.log(totalyears1);
console.log(names);
console.log(name_2);



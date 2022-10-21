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



const totalYears = pilots .reduce ((accum, {years}) => accum + pilot.years, 0);

const names = pilots.reduce((acc, { name}) => {
   return  acc + " " +name;
},"");



const totalYears = pilots.reduce ((accum, {years}) => accum + pilot.years, 0);
  if { acc.length > 0} {
    return acc + "" + names;
  }
  else {
    return name:
  }, "");  }



const name_2 = pilots.map(({name }) => name).join(",");

console.log(names);
console.log(name_2);


console.log(names);
    


console.log(totalYears);
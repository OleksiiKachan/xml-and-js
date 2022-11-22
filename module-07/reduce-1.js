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


const names = pilots.reduce((accum, {name}) => 
{
  if(accum.length > 0){
    return accum + "," + name;
  }
  else {
    return name ;
  }
  
}, "");


// 2nd way to do it 

const name1 = pilots.map(({name}) => name).join(",");

console.log(totalYears);
console.log(names);
console.log(name1);

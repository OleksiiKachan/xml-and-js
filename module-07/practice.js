
const add = (x,y) =>
x+y;
console.log(add(2,2));

const sub = (x,y) =>
x-y;
console.log(sub(3,2));

const print = () =>
console.log("Hello World");

print();


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
  //console.log(pilots);
  
  const em = pilots.filter((p) => p.faction === "Empire");
  
  //const empire = pilots.filter((pilot) => pilot.faction === "Empire");
  
  console.log(em);

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  const wrd = words.filter((p => p.length>6));
  console.log(wrd);

  const max = (value) =>
  value >= 10;

  const filtered = [12,4,10,11,13,4,5,6].filter(max);

  console.log(filtered);

  const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.map((number) => {
  return number % 2 === 0;
});

const even = numbers.map((n) => 
 n % 2 === 0
);

console.log(even);

const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

const fe = [];
officers.forEach((off) =>
fe.push(off.id)
);
console.log("Officer ID");
console.log(fe);


const offi = officers.map((off)=>
off.id
);
console.log("Fi");
console.log(offi);


const pilot= [
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

console.log("Pilots data");

const totalYears = pilot.reduce((accum, p)=>
accum+p.years
, 0
);

console.log(totalYears);


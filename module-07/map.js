const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

console.log(`Source:`);
console.log(officers);

console.log(`-----------`);
console.log(`forEach`);
console.log(`-----------`);
//not good approarch
const officersIds_1 = [];
officers.forEach((officer) => {
  officersIds_1.push(officer.id);
});

console.log(officersIds_1);

console.log(`-----------`);
console.log(`map`);
console.log(`-----------`);

const officersIds_2 = officers.map((officer) => {
  return officer.id;
});

const officersnames = officers.map((officer) => {
  return officer.name;
});
//const{name} = officer is same as const name=officer.name

//const off = officers.map(({id})=>id)
console.log(officersIds_2);
console.log(officersnames);
// const officersIds_3 = officers.map((officer) => officer.id);

// console.log(officersIds_3);

// const officersIds_4 = officers.map(({ id }) => id);

// console.log(officersIds_4);

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.map((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);
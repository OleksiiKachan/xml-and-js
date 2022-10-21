const officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" },
  ];
  
const officersIds_1 = [];

console.log(`Source:`);
console.log(officers);

console.log(`-----------`);
console.log(`map`);
console.log(`-----------`);
const officersNames = officers.map((officer) => {
    return officer.name;
  });

console.log(officersNames);
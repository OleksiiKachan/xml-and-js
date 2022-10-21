const officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" },
  ];

  console.log(`Source:`);
console.log(officers);

console.log(`-----------`);
console.log(`map`);
console.log(`-----------`);

const officers_name = officers.map((officer) =>{
    return officer.name;
})

console.log(officers_name);
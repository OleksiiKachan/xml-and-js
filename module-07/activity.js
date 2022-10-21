const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

console.log(`Source:`);
console.log(officers);

const empire = officers.filter((officer) => officer.name === "Captain");

console.log(empire);empire
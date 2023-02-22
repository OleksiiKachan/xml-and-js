const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

// var arr = officers.map(({ name, id }) => {
//   const [fname, lname] = name.split(" ");
//   return { id, fname, lname };
// });

var arr = officers.map((a) => a.name);

console.log(arr);

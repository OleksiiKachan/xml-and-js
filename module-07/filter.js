// const pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   },
// ];

// console.log(`Source:`);
// console.log(pilots);

// const empire = pilots.filter((pilot) => pilot.faction === "Empire");

// const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");

// const e_names = empire.map(({ name } )=> name);
// const r_names = rebels.map(({ name } )=> name);

// console.log(empire);

// console.log(rebels);

// console.log(e_names);

// console.log(r_names);

// //We can combine map and filter.
// const empire1 = pilots.filter((pilot) => pilot.faction === "Empire").map(({ name } )=> name);
// console.log(empire1);


const fn = () => console.log("important function");

const another = fn;

another("another function");

function foo() {
  console.log("1 function");
}
foo();

let nums = [10, 50, 88];

nums.filter((n) => n > 10);

console.log(nums);

const s={};
console.log(typeof (s));

const data = new Object();
console.log(typeof (data));

const data1 = { value: 1 };
console.log(typeof (data1));
const data = [
  { born: 1870, died: 1924 },
  { born: 1893, died: 1976 },
  { born: 1869, died: 1948 },
  { born: 1901, died: 1989 },
];

var age = data.map(({ born, died }) => died - born);
console.log("age: " + age);

var filtered = age.filter((row) => row > 75);

console.log("filterd: " + filtered);

//for each iteration, compares the acc with the current value
//if acc larger than the current value, return acc for the next iteration;
//otherwise, return the current value.
var oldest = filtered.reduce((accumulator, row) =>
  accumulator <= row ? row : accumulator
);

console.log("oldest: " + oldest);

var chain = data
  .map(({ born, died }) => died - born)
  .filter((row) => row > 75)
  .reduce((accumulator, item) => (accumulator <= item ? item : accumulator));

console.log("chain: " + chain);

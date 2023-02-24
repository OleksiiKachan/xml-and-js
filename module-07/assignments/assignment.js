const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map(({ born, died }) => died - born);
const filtered = age.filter((item) => item > 75);
const oldest = filtered.reduce((prev, curr) => Math.max(prev, curr), 0);
console.log("The result is: ", oldest);

const oldestChain = data
  .map(({ born, died }) => died - born)
  .filter((item) => item > 75)
  .reduce((prev, curr) => Math.max(prev, curr), 0);
console.log("The result by chaining is: ", oldestChain);
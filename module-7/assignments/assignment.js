const data = [
  { born: 1870, died: 1924 },
  { born: 1893, died: 1976 },
  { born: 1869, died: 1948 },
  { born: 1901, died: 1989 },
];

const age = data.map(({ born, died }) => died - born);

const filtered = age.filter(data => data > 75);

const oldest = filtered.reduce((acc, value) => acc > value ? acc : value);

// Refactoring to use chaining
console.log(
  data
    .map(({ born, died }) => died - born)
    .filter(age => age > 75)
    .reduce((acc, value) => acc > value ? acc : value)
);


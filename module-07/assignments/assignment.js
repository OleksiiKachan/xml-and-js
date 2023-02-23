const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

// Chaining method
const oldest = data
    .map(individual => individual.died - individual.born)
    .filter(age => age > 75)
    .reduce((oldest_age, age) => Math.max(oldest_age, age), 0);

console.log(oldest);
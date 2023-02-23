data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map (({born, died}) => died - born);
console.log(`The array of ages is: ${age}`);

const filtered = age.filter(age => age > 75);
console.log(`The array of ages > 75 is: ${filtered}`);

const oldest = filtered.reduce((accum, current) => accum > current ? accum : current);
console.log(`The oldest age is: ${oldest}`);
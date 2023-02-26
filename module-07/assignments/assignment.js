const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map(people => people.died - people.born);
console.log("age");
console.log(age);

const filtered = age.filter(age => age>75);
console.log("filtered");
console.log(filtered);

const highest_age = filtered.reduce((highest_age, age) => Math.max(highest_age, age), 0);
console.log("highest_age");
console.log(highest_age);

//  refactoring the code and 
// chaining the mapped data with filter and reduce methods
const oldest = age.filter(age => age > 75).reduce((highest_age, age) => Math.max(highest_age, age), 0);
console.log(oldest);
//n01551519 Rutwa Dave
//Assignment Module-07

const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

//const age = data.map(person => person.died - person.born);

/*const filter = age.filter((age) => {
    return age.age > 75;
});*/


const oldest = data
    .map(person => person.died - person.born)
    .filter(age => age > 75)
    .reduce((old_age, age) => Math.max(old_age, age), 0);

console.log(oldest);
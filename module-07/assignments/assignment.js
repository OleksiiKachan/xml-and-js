const data = [
       { born: 1870, died: 1924 },
       { born: 1893, died: 1976 },
       { born: 1869, died: 1948 },
       { born: 1901, died: 1989 },
];

const age = data.map((person) => {
       return person.died - person.born
});
console.log('Age: ', age);

const filtered = age.filter((age) => age > 75);
console.log('filtered: ', filtered)

const oldest = filtered.reduce((acc, oldest) => {
       return acc > oldest ? acc : oldest
}, 0)
console.log('oldest: ', oldest);

const oldest1 = data.map((person) => { return person.died - person.born })
       .filter((age) => age > 75)
       .reduce((acc, oldest) => { return acc > oldest ? acc : oldest }, 0);
console.log('Oldest: ', oldest1);

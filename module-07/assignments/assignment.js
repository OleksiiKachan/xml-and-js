const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

const age = data.map((person) =>{
    return person.died - person.born
});

console.log(age);

const filtered = age.filter((person) =>{
    return person > 75;
});

console.log(filtered);

const oldest = filtered.reduce((accum, person) =>{
    return Math.max(accum, person);
},0);

console.log(oldest);

const chaining = data
    .map((person) => person.died - person.born)
    .filter((person) => person > 75 )
    .reduce((accum, person) => Math.max(accum, person),0);

console.log(chaining);
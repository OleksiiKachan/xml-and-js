const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

console.log("======= map, filter and reduce  ==========");

// map function
const age = data.map(
    ({born, died}) => {
        return died - born;
});
console.log(age);

// filtered function
const filtered = age.filter((age) => {
    return age > 75;
});
console.log(filtered);

// reduce function
const oldest = filtered.reduce((acc, age) => {
    if (age > acc)
    {
        acc = age;
    }
    return acc;
}, 0);
console.log(oldest);

// Chaining
console.log("======= chaining ==========");
const highestAge = data.map(({ born, died }) => died - born)
    .filter(age => age > 75)
    .reduce((acc, age) => {
        if (age > acc) {
            acc = age;
        }
        return acc
    }, 0);

console.log(highestAge);  
data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
]

console.log("\n----------Age after Map ----------");
const age = data.map((x) => {
    return x.died - x.born
});
console.log(age);

console.log("\n----------Filtered Data---------\n");
const filtered = age.filter((x) => {
    if (x > 75) {
        return x;
    }
});
console.log(filtered);

console.log("\n--------Reduce --------");
const oldest = filtered.reduce((acc, x) => {
    return Math.max(acc, x);
}, 0);
console.log(oldest);

console.log("\n-------Chaining----------");
const chaining = data
    .map((x) => x.died - x.born)
    .filter((x) => x > 75)
    .reduce((acc, x) => Math.max(acc, x), 0);
console.log(chaining);
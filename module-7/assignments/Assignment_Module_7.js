let data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },];
// Map data and calculate age for each entry (died - born) and save into new variable age

let age = data.map((data) => { return data.died - data.born; })
console.log("Age : " + age);
let filtered = age.filter((age) => age > 75);// Filter age to be greater than 75 and save into filtered variable
console.log(filtered);
let oldest = filtered.reduce((max, age) => age > max ? age : max, filtered[1]);
console.log("Oldest " + oldest);// Reduce filtered to output the highest age and save into oldest variable
let chaindata = data.map((data) => data.died - data.born).filter((age) => age > 75).reduce((max, age) => max ? age : max, filtered[1]);
console.log("Chain data " + chaindata); // Refactor your code to use chaining
//console.log the result

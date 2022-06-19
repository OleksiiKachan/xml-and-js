const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },];
const diff = (data.died - data.born) // Map data and calculate age for each entry (died - born) and save into new variable age
var age = data.map((data) => { return diff; })
console.log(age);
var filtered = age.filter((age) => age > 75);// Filter age to be greater than 75 and save into filtered variable
console.log(filtered);
var oldest = filtered.reduce((max, age) => age > max ? age : max, filtered[0]);
console.log("Oldest" + oldest);// Reduce filtered to output the highest age and save into oldest variable
var chaindata = data.map((data) => diff).filter((age) => age > 75).reduce((max, age) => max ? age : max, filtered[0]);
console.log("Chain data" + chaindata); // Refactor your code to use chaining
//console.log the result

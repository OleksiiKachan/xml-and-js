data= [
  { born: 1870, died: 1924 },
  { born: 1893, died: 1976 },
  { born: 1869, died: 1948 },
  { born: 1901, died: 1989 },
];
console.log("age");
const age = data.map((data) => {
    return (data.died - data.born)
    });
console.log(age);

// console.log("filtered age");
// const filtered= age.filter((age) => {
//     return age > 75;    
//   });
// console.log(agfilterede);
// console.log("Oldest age");

// const oldest= filtered.reduce((acc, filtered) => {
//     if(acc < filtered)
//         acc=filtered;
//     return acc;
//   }, 0);

// const result = data
//   .map((data) => data.died - data.born)
//   .filter((data) => data > 75)
//   .reduce((acc, value) => {
//     if(acc < value)
//         acc=value;
//     return acc;
//   }, 0);
//   console.log(result);
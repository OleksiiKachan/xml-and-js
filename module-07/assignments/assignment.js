data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ]

console.log("----------Age ----");

  const age = data.map((d) => {
    
     return   d.died - d.born
    
  });
console.log(age);


console.log("-------Filtered ---------");
 const filtered = age.filter((a) => {
     return a > 75;   
    });  

console.log(filtered);

console.log("--------Reduce --------");

 const oldest = filtered.reduce((accum, r) => {
    
      return Math.max(accum, r);
    
    }, 0);

console.log(oldest);

console.log("-------Chaining----------");
const chaining = data
  .map((d) => d.died - d.born)
  .filter((f) => f > 75)
  .reduce((accum,r ) => Math.max (accum , r ),0);

  console.log(chaining);
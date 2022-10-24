const data=[
    { born: 1870, 
    died: 1924 },
  { born: 1893, 
    died: 1976 },
  { born: 1869, 
    died: 1948 },
  { born: 1901, 
    died: 1989 },
]

console.log("source : ");
console.log(data);

const age = data.map((one) =>{
    return (one.died-one.born);
})

console.log("Age : ");
console.log(age);

const filtered = age.filter((one) => one > 75);

console.log("Age greater than 75 :");
console.log(filtered);


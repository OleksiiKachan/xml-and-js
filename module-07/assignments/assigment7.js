const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

console.log(`1.Ages:`);
const age = data.map((data) => {
    return data.died-data.born;
  });

console.log(age);

console.log(`2.Ages > 75:`);
const filtered = age.filter((age) => {
    return age>75;
  });
console.log(filtered);

console.log(`3.Oldest:`);
  const oldets = filtered.reduce((age1,age2,age3) => {
    if(age1 > age2 && age1>age3)
    return age1;
    else if(age2 > age1 && age2>age3)
    return age2;
    else
    return age3;
  }, 0);

  console.log(oldets);

console.log(`Chaining`);
const total = data
  .map((data) => data.died-data.born)
  .filter((age) => age>75)
  .reduce((age1,age2,age3) =>{
    if(age1 > age2 && age1>age3)
    return age1;
    else if(age2 > age1 && age2>age3)
    return age2;
    else
    return age3;
  } , 0);
console.log(total);
const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];



  const age = data.map((data) => [{
    age: data.died - data.born
  }]
  );
console.log('\n---------------AGE----------------\n');
console.log(age);


const filtered = age.filter(([aged]) => aged.age > 75);
console.log('\n------------FILTERED--------------\n');
console.log(filtered);


const oldest = [filtered].reduce(([[old]]) => {
    return Math.max(old.age);
});
 

console.log('\n-------------OLDEST---------------\n');
console.log(oldest);



const oldest2 = data
  .map((age) => {
    return age.died - age.born;
  })
  .filter((filtered) => {
    return filtered.age > 75;
  })
  .reduce((oldest) => {
    return Math.max(oldest.age);
  });
console.log('\n-------------OLDEST2---------------\n');
console.log(oldest2);
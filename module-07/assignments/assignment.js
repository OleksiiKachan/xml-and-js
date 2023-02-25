const data = 
    [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];


  const oldest = data
  .map(person => person.died - person.born)
  .filter(age => age > 75)
  .reduce((maxAge, age) => Math.max(maxAge, age ), 0);

console.log(oldest);  

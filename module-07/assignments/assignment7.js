const data =
[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((data) => 
  {
    return data.died-data.born;
  });
  console.log(`\nThe all ages ----------`);
  console.log(age);

  const filtered = age.filter((age) => age > 75);
  console.log(`\nThe ages greater than 75 years old ----------`);
  console.log(filtered);

  const oldest = filtered.reduce((accum , age) => {
    if(accum > age){
      return accum;
    }
    else{
      return age;
    }
  },"");
  console.log(`\nThe age of the oldest person ----------`);
  console.log(oldest);

  console.log(`\nThe output of the chaining methods ----------`); 
  const oldestPerson = data
  .map((data) => data.died-data.born)
  .filter((age) => age > 75)
  .reduce((accum , age) => { if(accum > age) return accum; else return age;},"");
  console.log(oldestPerson);

  

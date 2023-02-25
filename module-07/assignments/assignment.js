const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map ((item)=>{
    return item.died - item.born
  });

  console.log(`The age of the people are:`);
  console.log(age);

  const filtered =  age.filter((item) => {return item >75} );

  console.log(`The people older than are:`);
  console.log(filtered);

  const oldest = filtered.reduce((newOld, age) =>
  {
    if(newOld<age){
        newOld=age;
    }
    return newOld;
  },-1);

  console.log(`The oldest person is:`);
  console.log(oldest);

  const refactored = data.map((item) => item.died - item.born)
                    .filter((age) => age > 75)
                    .reduce((newOld, Age)=>{
                    if(newOld<Age){
                        newOld=Age;
                    }
                    return newOld;
                },-1);

console.log(`Chaining refactored:`);
console.log(refactored);                
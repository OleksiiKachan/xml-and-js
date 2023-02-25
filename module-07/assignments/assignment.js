const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

//age
const age = data.map(({born, died}) => {
    return died-born;
  });

console.log("Age:",age);

//age greater than 75
const filtered = age.filter((age) => age > 75);

console.log("Age greater than 75 is:",filtered);

//highest age
const oldest = filtered.reduce((highestAge, currentAge) => {
    if(highestAge > currentAge){
       return highestAge;
    }
    else{
        return currentAge;
    }   
  });

console.log("Highest age is:",oldest);

//chaining
const highestA = data
.map(({born,died}) => {return died-born;})
.filter((age) => age > 75)
.reduce((highestAge, currentAge) => {
    if(highestAge > currentAge){
       return highestAge;
    }
    else{
        return currentAge;
    }   
  });

  console.log("Highest age using chaining is:", highestA);

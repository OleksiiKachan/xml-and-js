const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];


const age = data.map(({born, died}) => {
    let age = died - born;
    return {
     born, died, age   
    };
});
console.log("CALCULATED AGE ->");
console.log(age);

console.log("AGE ABOVE 75 ->");
const filtered = age.filter((ageCheck) => ageCheck.age > 75);
console.log(filtered);

console.log("OLDEST OF ALL ->");
const oldest = filtered.reduce((acc, age) => {
  if (age.age > acc) {
      acc = age;
  }
  return acc;
}, 0);
console.log(oldest);

//Chaining
console.log("Output after chaining ->");
const chainedAge = data
                    .map(({born, died}) => died - born)
                    .filter((ageCheck) => ageCheck > 75)
                    .reduce((acc, ageVar) => {
                      if (ageVar > acc) {
                          acc = ageVar;
                      }
                      return acc;
                    }, 0);
    
                    console.log(chainedAge);
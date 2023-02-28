const people = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

// Map `data` and calculate age for each entry (died - born) and save into new variable `age`
const ageList = people.map(({born, died}) => {
    const age = died - born
    return age
    });

// Filter `age` to be greater than 75 and save into `filtered` variable
const filtered = ageList.filter((age) => Boolean(age > 75));

// Reduce `filtered` to output the highest age and save into `oldest` variable
const oldest = filtered.reduce((acc,value) => {
    if(value > acc){
        acc = value
    }
    return acc;
  }, 0);
  
  //console.log(ageList)
  //console.log(filtered)
  //console.log(oldest);

// Refactor your code to use chaining
const oldestPeople = people.map((age)=> age.died - age.born)
                         .filter((filtered) => filtered > 75)
                         .reduce((acc,value) => acc > value ? acc : value)

// console.log the result
console.log(oldestPeople)
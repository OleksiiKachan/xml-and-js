const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const calculatedAge = data.map(({born, died}) => {
    let age = died - born;
    return {
     born, died, age   
    };
});

console.log(calculatedAge);

const filteredAge = calculatedAge.filter((ageCheck) => ageCheck.age > 75);
console.log(filteredAge);


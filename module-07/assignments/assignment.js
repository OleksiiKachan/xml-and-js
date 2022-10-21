const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];


const age = data.map( ({born, died}) => died-born)
console.log(age);

const filtered = age.filter(age => age > 75);
console.log(filtered);

const oldest = filtered.reduce((acc,item) => {
    if(item > acc)
        acc = item;
    return acc;
}, 0);
console.log(oldest);

const chaining = data
    .map( ({born, died}) => died-born)
    .filter(age => age > 75)
    .reduce((acc,item) => {
        if(item > acc)
            acc = item;
        return acc;
    }, 0);
console.log(chaining);
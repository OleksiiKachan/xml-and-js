const data = 
[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

// chaining
const age = data.map(({born, died}) => { return died - born;  })
   .filter((age) => { return age > 75; })
   .reduce((acc, age) => { 
        if (age > acc)
        {
            acc = age;
        }    
        return acc;
    }, 0)
console.log(age);


// map function
// const age = data.map(
//     ({born, died}) => {
//         return died - born;
// });
// console.log("Ages: ");
// console.log(age);

// filtered function
// const filtered = age.filter((age) => {
//     return age > 75;
// });
// console.log("Age > 75: ");
// console.log(filtered);

// reduce function
// const oldest = filtered.reduce((acc, age) => {
//     if (age > acc)
//     {
//         acc = age;
//     }
//     return acc;
// }, 0);
// console.log("Oldest Age: ");
// console.log(oldest);
const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

const age = data.map
((agess) =>
 {
    return agess.died - agess.born;
 }
);
console.log(`AGES--`);
console.log(age);
//---------------------------------------
const filtered = age.filter
((Age) => 
 {
    return Age > 75;
 }
);
console.log(`AGES > 75--`);
console.log(filtered);
//--------------------------------------
const oldest = filtered.reduce
((old, age) => 
 {
    if (age > old) 
    {
        old = age;
    }
    return old;
 }, -1
);
console.log(`OLDEST--`);
console.log(oldest);
//---------------------------------------
const refactor = data
    .map((agess) => agess.died - agess.born)
    .filter((Age) => Age > 75)
    .reduce
((old, age) => 
    {
        if (age > old)
        {
            old = age;
        }
        return old;
    }, -1
);
console.log(`CHAINING--`);
console.log(refactor);






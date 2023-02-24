const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
    { born: 1901, died: 2001 },
];

const age = data.map((item) => item.died - item.born);
const filtered = age.filter((item) => item > 75);

const oldest = filtered.reduce((accum, pilot) => {
    if(age < pilot)
    {
        return age;
    } else {
        return pilot;   
    }
}, 0);

console.log('------ Ages are ------');
console.log(age);
console.log('------ Oldest age is ------');
console.log(oldest);
const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

const age= data.map((person) =>{
    return person.died - person.born
});
console.log(age);


const filtered=age.filter((n) => n>75);
console.log(filtered);

const oldest=filtered.reduce((acc,item) => {
    if (item > acc) {
        acc = item;
      }
      return acc;
});
console.log(oldest);

const result=data
.map((person) => person.died-person.born)
.filter((number) => number>75)
.reduce((acc,item) => {
    if (item > acc) {
        acc = item;
      }
      return acc;
});

console.log(result);

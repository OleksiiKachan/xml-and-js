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


const filtered=age.filter((num) => num>75);
console.log(filtered);

const oldest=filtered.reduce((acc,number) => {
    if (number > acc) {
        acc = number;
    }
    return acc;
});
console.log(oldest);


const result=data
.map((person) => person.died-person.born)
.filter((number) => number>75)
.reduce((acc,n1) =>  {
    if (n1 > acc) {
        acc = n1;
    }
    return acc;
});

console.log(result);
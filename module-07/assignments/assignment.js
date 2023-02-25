const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];


// const age = data.map((data)=>{
//     Age: data.d-data.b;
// }
// );

const Ages=data.map((data)=>
({
    Age: data.died-data.born
})
);

console.log(Ages);

const flt  = Ages.filter(data=>data.Age>75);

console.log(flt);

const old = flt.reduce((acc, data) => {
  if (!acc||data.Age > acc.Age) {
    return {Age: data.Age };
  } else {
    return acc;
  }
}, null);

console.log(old);

const res =data
.map(({ born, died }) => died - born)
.filter((age) => age > 75)
.reduce((maxAge, age) => Math.max(maxAge, age), 0);

console.log(res);


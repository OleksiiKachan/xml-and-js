const Data =[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ]

  const Age = Data.map((Data) => {
    return {
     age:Data.died - Data.born
    }  
});

console.log(`Age`);
console.log(Age);

console.log(`--------------------`);
console.log(`--------------------`);


const filtered = Age.filter((Age) => Age.age > 75);
console.log(`filtered results`);
console.log(filtered);

console.log(`--------------------`);
console.log(`--------------------`);


const oldest = filtered.reduce((year, Age) => {
    if (year > Age) {
        return year 
    }
   
    else {
        return  Age
    }
   
  }, 0)
  console.log(`Oldest`);
  console.log(oldest);
  console.log(`--------------------`);
console.log(`--------------------`);


const Oldest1 = Data
.map( age => age.died - age.born)
.filter( age=> age > 75)
.reduce((year, Age) => {
    if (year > Age) {
        return year 
    }
   
    else {
        return  Age
    }
   
  }, 0)




  console.log(`Chained`);
console.log(Oldest1);


  
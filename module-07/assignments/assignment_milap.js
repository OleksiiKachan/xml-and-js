//Data
const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map(({born, died}) => {

    return died-born;
  });

console.log("Age",age);

//filter `age` to be greater than 75 and save into `filtered` variable
const filtered = age.filter((age) => age > 75);

console.log("Senior Aged-",filtered);

//- Reduce `filtered` to output the highest age and save into `oldest` variable

const oldest = filtered.reduce((Age1,Age2) => {
    if(Age1 >Age2){
       return Age1;
    }
    else{
        return Age2;
    }   
  });

console.log("Highest age among all is ",oldest);

// Refactor your code to use chaining
const chain = data.map(({born,died}) => {return died-born;}).filter((age) => age > 75).reduce((Age1, Age2) => {
    if(Age1 >Age2){
      return Age1;
  }
  else{
      return Age2;
  }   
    
  });

  //console.log the result

  console.log("Highest age using chaining is:", chain);
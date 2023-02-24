const data = 
 [
     { born: 1870, died: 1924 },
     { born: 1893, died: 1976 },
     { born: 1869, died: 1948 },
     { born: 1901, died: 1989 },
 ];

 // Refactoring the code using chaining
 const age = data.map(({born, died}) => { return died - born;  })
    .filter((age) => { return age > 75; })
    .reduce((highestAge, age) => { 
         if (age > highestAge)
         {
            highestAge = age;
         }    
         return highestAge;
     }, 0)
 console.log(age);


 // map function to return entry (died - born) and save into new variable `age`
//  const age = data.map(
//      ({born, died}) => {
//          return died - born;
//  });
//  console.log("Ages: ");
//  console.log(age);

 // filtered function to return the age 
 //i.e., greater than 75 and store in the filtered variable
//  const filtered = age.filter((age) => {
//      return age > 75;
//  });
//  console.log("Age > 75: ");
//  console.log(filtered);

 // reduce function to return the oldest age
//  const oldest = filtered.reduce((highestAge, age) => {
//      if (highestAge > i)
//      {
//         highestAge = age;
//      }
//      return highestAge;
//  }, 0);
//  console.log("Oldest Age: ");
//  console.log(oldest);
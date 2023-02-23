const data = 
[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 }
];
//console.log(data);

//map method
  const age = data.map((person) => person.died - person.born);
  console.log("Age : ", age);

  //filter method
  const filtered = age.filter((person) => person > 75);
  console.log("Age greater than 75 : " ,filtered);

  //reduce method
  const oldest = filtered.reduce((maxAge, currentAge) => {
    if (currentAge > maxAge) {
      return currentAge;
    } else {
      return maxAge;
    }
  });

    console.log("Highest Age : ", oldest);

    //chaining
    console.log("Chaining")
    const maxage = data
               .map((person) => person.died - person.born)
               .filter((person) => person > 75)
               .reduce((maxAge, currentAge) => {
                if (currentAge > maxAge) {
                  return currentAge;
                } else {
                  return maxAge;
                }
              },0);
   console.log("Highest age : ", maxage);



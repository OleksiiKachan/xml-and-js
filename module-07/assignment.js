const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((item) => item.died - item.born);

  console.log("Age for each entry: ",age);
  console.log("");
 
  const filter = age.filter((item) => item > 75);

  console.log("Age greater than 75 is: ",filter);
  console.log("");

  const oldest = filter.reduce((acc, i) => {
    if (acc > i) {
      return i;
    } else {
      return i;
    }
  }, 0);

  console.log("The highest age is: ",oldest);
 
  const highestAgeChain = data
    .map((item) => item.died - item.born)
    .filter((item) => item > 75)
    .reduce((acc, i) => {
      if ((acc, i)) {
        return i;
      } else {
        return i;
      }
    }, 0);

  console.log("************");
  console.log("Chaining result is: ", highestAgeChain);
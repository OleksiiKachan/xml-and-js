let data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  let age = data.map((data) => {
    return (data.died - data.born);
    });

  console.log("------ Output ------");
  console.log("Map: " + age);

  let filtered = age.filter((age) => {
    return age > 75;
  });

  console.log("Filter: " + filtered);
  
  let oldest = filtered.reduce((accumulator, current) => {
    if (accumulator > current) {
      return accumulator;
    } else {
      return current;
    }
  }, 0);

  console.log("Reduce: " + oldest);

  let refactored = data.map((data) => data.died - data.born).filter((data) => data > 75).reduce((accumulator, data) => {
    if(accumulator < data) {
        accumulator = data;
        return accumulator;
    } else {
        return data;
    }
  }, 0);

  console.log("Chaining: " + refactored);
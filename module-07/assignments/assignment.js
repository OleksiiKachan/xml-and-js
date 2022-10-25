const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];
  const age = data.map((x) => x.died - x.born);
  console.log("Age after applying map ");
  console.log(age);
  
  const filter = age.filter((x) => x > 75);
  console.log("Age after applying filter ");
  console.log(filter);
  
  const oldest = filter.reduce((acc, i) => {
    if (acc > i) {
      return i;
    } else {
      return i;
    }
  }, 0);
  console.log("Oldest is");
  console.log(oldest);
  
  const oldestchain = data
    .map((x) => x.died - x.born)
    .filter((x) => x > 75)
    .reduce((acc, x) => {
      if ((acc, x)) {
        return x;
      } else {
        return x;
      }
    }, 0);
  console.log("Chaining");
  console.log(oldestchain);
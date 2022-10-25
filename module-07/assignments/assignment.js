const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];
  const age = data.map((x) => x.died - x.born);
  console.log(`Mapped age is ${age}`);
  
 
  const filter = age.filter((x) => x > 75);
  console.log(`Filtered age is ${filter}`);
 
 
  const oldest = filter.reduce((acc, i) => {
    if (acc > i) {
      return acc;
    } else {
      return i;
    }
  }, 0);
  console.log(`Oldest is :${oldest}`);
 
  const oldestchain = data
    .map((x) => x.died - x.born)
    .filter((x) => x > 75)
    .reduce((acc, x) => {
      if (acc >  x) {
        return acc;
      } else {
        return x;
      }
    }, 0);
  console.log(`Result using chaining: ${oldestchain}`);
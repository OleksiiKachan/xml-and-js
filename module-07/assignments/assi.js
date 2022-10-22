const data = 
    [
        { born: 1870, died: 1924 },
        { born: 1893, died: 1976 },
        { born: 1869, died: 1948 },
        { born: 1901, died: 1989 },
    ];
console.log("----------age variable----------");
const age = data.map((data) => {
    return (data.died - data.born)
    });
console.log(age);

const filtered= age.filter((age) => {
    return age > 75;
  });
  console.log("-------- after filter - more than 75--------");
  console.log(filtered);

  const oldest= filtered.reduce((accum, filtered) => {
    if(accum < filtered)
        accum=filtered;
    return accum;
  }, 0);

  console.log("------ Oldest age -----------");
  console.log(oldest);

  console.log("--- rechaining --");
  const refactor = data
  .map((data) => data.died - data.born)
  .filter((data) => data > 75)
  .reduce((acc, value) => {
    if(acc < value)
        acc=value;
    return acc;
  }, 0);
  console.log(refactor);
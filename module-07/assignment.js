const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  //calculate age
  const age = data.map((data) => {
    return data.died - data.born ;
  });
  console.log("---------------Age for data  :---------------- ");
  console.log(age);

  //data greater than 75
  const filtered = age.filter((data) => data > 75);
  console.log("------------------data of person age 75 :--------------- ");
  console.log(filtered);

  const oldest = filtered.reduce((acc, i) => {
    if (acc > i) {
      return i;
    } else {
      return i;
    }
  }, 0);

  console.log("-----------------Oldest person's age is :--------------s");
  console.log(oldest);


  ///using chain

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

  console.log(" ----------------- result according to chain -----------");
  console.log(oldestchain);
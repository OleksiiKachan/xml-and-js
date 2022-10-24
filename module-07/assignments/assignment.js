const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((dob) => {
    return dob.died - dob.born;
  });

  console.log(age);

  const filtered = age.filter((age) => {
    if(age > 75)
        return age;
  });

  console.log(filtered);

  const oldest = filtered.reduce((acc, a) => {
    if(acc > a){
        return acc;
    }
    else{
        return a;
    }
  }, 0);

  console.log(oldest);

  console.log("---------------");
  console.log("Chaining");
  console.log("---------------");

  const old = data.map((dob) => {
    return dob.died - dob.born;
  }).filter((age) => {
    if(age > 75)
        return age;
  }).reduce((acc, a) => {
    if(acc > a){
        return acc;
    }
    else{
        return a;
    }
  }, 0);

  console.log(old);
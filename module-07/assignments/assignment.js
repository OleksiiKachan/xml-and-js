const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((data) => {
    return (data.died - data.born)
    });
  console.log("---Map---");
  console.log(age);

  const filtered= age.filter((age) => {
    return age > 75;
  });
  console.log("---Filter---");
  console.log(filtered);

  const oldest = filtered.reduce((acc, filtered) => {
    if (acc > filtered) 
    {
      return acc
    } 
    else 
    {
      return filtered
    }
  }, 0)
  console.log("---Reduce---");
  console.log(oldest);

  console.log("---Rechaining---");
  const ref = data.map((data) => data.died - data.born).filter((data) => data > 75).reduce((acc, data) => {
    if(acc < data)
    {
        acc=data;
        return acc;
    }
    else 
    {
        return data
    }
  }, 0);
  console.log(ref);
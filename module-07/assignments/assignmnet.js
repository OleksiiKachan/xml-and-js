const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((data) => {
    return (data.died - data.born)
    });
  console.log("-------------Map Age--------------");
  console.log(age);

  const filtered= age.filter((age) => {
    return age > 75;
  });
  console.log("----------Filter Age-----------");
  console.log(filtered);

  const oldest = filtered.reduce((accum, filtered) => {
    if (accum > filtered) 
    {
      return accum
    } 
    else 
    {
      return filtered
    }
  }, 0)
  console.log("----------Reduce oldest---------------");
  console.log(oldest);

  console.log("------------------Rechaining code------------------");
  const result = data.map((data) => data.died - data.born).filter((data) => data > 75).reduce((accum, data) => {
    if(accum < data)
    {
        accum=data;
        return accum;
    }
    else 
    {
        return data
    }
  }, 0);
  console.log(result);
const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((dataf) => {
    res = dataf.died-dataf.born;
    return res;
  }
  );
  console.log("Age: " +age);


  const filtered  = age.filter((dataf) => {
    if(dataf > 75)
    return dataf;
  });
  console.log("Age greater than 75 : " +filtered);



const oldest = filtered.reduce((acc, value) => {
    return Math.max(acc, value);
});
console.log("Maximum age : " +oldest);


const chain = data.map(dataf => dataf.died-dataf.born)
                  .filter(dataf => dataf > 75 )
                  .reduce((acc, value) => Math.max(acc, value))
console.log("Highest age with chaining : " +chain);
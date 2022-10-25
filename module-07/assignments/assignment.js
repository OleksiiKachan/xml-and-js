const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map(data1 => data1.died-data1.born);
  console.log("Age: " +age);


  const filtered = age.filter((data1) =>  data1 > 75)
  console.log("Ages that are greater than 75 : " +filtered);



const oldest = filtered.reduce((acc, value) =>  Math.max(acc, value),0);
console.log("Highest age : " +oldest);


const chaining = data.map(dataf => dataf.died-dataf.born)
                  .filter(dataf => dataf > 75 )
                  .reduce((acc, value) => Math.max(acc, value))
console.log("Highest age using chaining : " +chaining);
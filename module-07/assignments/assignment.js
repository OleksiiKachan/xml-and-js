const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((d) => {
    return d.died - d.born;
  })

const filtered = age.filter((a) => {
    if(a > 75){
        return a;
    }
})

const oldest = filtered.reduce((acc, value) =>  Math.max(acc, value))

// same thing doing in one variable

const oldest_age = data.map((d) => d.died - d.born)
                 .filter((a) => a > 75)
                 .reduce((acc, value) =>  Math.max(acc, value))
     
console.log("Oldest age is : ", oldest_age)


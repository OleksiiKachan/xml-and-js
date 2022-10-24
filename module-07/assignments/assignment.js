const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];
console.log('\n------------Age----------');
  const age = data.map((d)=>{
    return d.died - d.born;
  });
console.log(age);

console.log('\n\n---------filtered----------')
  const filtered = age.filter((df)=>{
    if(df>75){
        return df;
    }
  });

  console.log(filtered);

  console.log('\n\n-----------oldest----------')

  const oldest = filtered.reduce((accum,data)=>accum || (accum.died - accum.born)<(accum.died-accum.born)?data:accum);

  console.log(oldest);

  
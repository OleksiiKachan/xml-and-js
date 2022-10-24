const data=
[
  { born: 1870, died: 1924 },
  { born: 1893, died: 1976 },
  { born: 1869, died: 1948 },
  { born: 1901, died: 1989 }
];
//console.log(data);

//Map Function
 const Age = data.map((item) => {
    return {age:item.died - item.born}
  });
  console.log(Age);

//Filter 
  const filter =Age.filter((item1)=>{return (item1.age)>75} );
  console.log(filter);

//Reduce
  const oldest = filter.reduce((prevVal,curVal) => {
    return curVal.filter > prevVal.filter ? prevVal: curVal;
  })
  console.log(oldest);
  
//Chain

  console.log("--Output After chaining--");

  const result=  data
  .map((item) => {return {age:item.died - item.born}})
  .filter((item1)=>{return (item1.age)>75} )
  .reduce((prev,cur) => {return cur.filter > prev.filter ? prev: cur;});
  console.log(result);
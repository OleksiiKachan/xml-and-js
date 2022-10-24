const data = [
    
        { born: 1870, died: 1924 },
        { born: 1893, died: 1976 },
        { born: 1869, died: 1948 },
        { born: 1901, died: 1989 },
    
  ];  

  console.log(`Source:`);
console.log(data);

console.log(`-----------`);
console.log(`forEach`);
console.log(`-----------`);

const age_data= data.map((data) => {
    return data.died-data.born;
});

console.log(age_data);

console.log(`-----------`);
console.log(`map`);
console.log(`-----------`);



const filtered = age_data.filter((age_data) => age_data > 75 );

console.log('filtered......');
console.log(filtered);



const oldest = age_data.reduce((acc,  age_data ) => {
    if (acc > age_data) {

        return  acc
    }
    else {
        return age_data;
    }

 },0);
  
 console.log( oldest );


 const map_chain= data
 .map(age => age.died-age.born)
  
   .filter((age) => age > 75 )  

   
   .reduce((acc,  age ) => {
      if (acc > age) {
    
         return  acc
      }
        else {
           return age;
       }
    
   },0)

console.log(map_chain);
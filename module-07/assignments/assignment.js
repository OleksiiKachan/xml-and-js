const data = [
    {
      "born": 1870,
      "died": 1924
    },
    {
        "born": 1893,
        "died": 1976
    },
    {
        "born": 1869,
        "died": 1948
    },
    {
        "born": 1901,
        "died": 1989
    }
]
console.log("---Mapping--");
const age =  data.map((item) =>{
    return {
    Born:item.born,
    Died: item.died,
    age : item.died - item.born
    }
      });
      console.log(age);

    console.log("---Filtering--");     
    const filtered = age.filter((item) =>{
        if(item.age > 75){
           return item;
        }
      });
      console.log(filtered);
    console.log("---Reduce--");
    const oldest = filtered.reduce((acc, person) => {
        if (acc === null || person.age > acc) return person.age;
        return acc;
      }, null);
  console.log(oldest);
      console.log("---chaining--");
      const chain = data.map(item => item.died-item.born)
                  .filter(item => item > 75 )
                  .reduce((acc, value) => Math.max(acc, value))
console.log(chain);
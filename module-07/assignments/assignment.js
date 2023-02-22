const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map((length) => {

    const age = length.died - length.born;
    return{
        age
    };
})

const filtered = age.filter((item) => item.age > 75);

const oldest = filtered.reduce(
    (accum, old) => {
        if(old.age > accum){
            accum = old.age
        }
        
        return accum;

}, 0);

const chain = data
    .map((ageChain) => {
        return ageChain.died - ageChain.born;
    })
    .filter((filterChain) =>{
        return filterChain > 75;
    })
    .reduce((acc, value) =>{
        if(value > acc){
            acc = value
        }
        return acc;
    },0)

console.log(chain);


const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map((data) => { return data.died - data.born; });
console.log("------------Age------------------")
console.log(age);

const filtered = age.filter((age) => { return age > 75 }); 
console.log("-------------filtered data------------");
console.log(filtered);

const oldest = filtered.reduce((accum,item) => {
    if(item > accum)
    accum = item;
    return accum;
}, 0);
console.log("-------------Oldest age------------");
console.log(oldest);


const chaining1 = data.map((data) => { return data.died - data.born; }).filter((age) => { return age > 75 }).reduce((acc,item) => {
        if(item > acc)
            acc = item;
        return acc;
    }, 0);
console.log("-------------Using chaining-----------");
console.log(chaining1);
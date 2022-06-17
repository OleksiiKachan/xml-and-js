const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ]

const age = data.map((item)=>{
return item.died - item.born
})
console.log('age:');
console.log(age);

const filtered = age.filter((item)=>item>75);
console.log('age>75:');
console.log(filtered);

const oldest = filtered.reduce((acc, item)=>{
if(acc<item){
    acc=item;
}
return acc;
})
console.log('oldest:');
console.log(oldest);

const oldestAge = data
    .map((item)=>item.died-item.born)
    .filter((item)=>item>75)
    .reduce((acc,item)=>{if(acc<item){acc=item;}return acc;})

console.log('Refactor:');
console.log(oldestAge);

const numbers = [1,2,3,4,5,6,];

// const evenNumbers = numbers.filter((item) => {
//     return item % 2 === 0; //return true or false
// });

// evenNumbers = numbers.filter((item) => !Boolean(item % 2)); //same as item % 2 === 0

const evenNumbers = numbers

.map((item) => {
    if(item % 2 === 0){
    return item;
} else {
    return null;
}
})

.filter((item) => Boolean(item));
console.log(evenNumbers);
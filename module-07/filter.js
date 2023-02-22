const numbers = [1,2,3,4,5,6];

const evenNumbers = numbers.filter((item) => {
    return item % 2 === 0;
});
console.log(evenNumbers);

//another way
const evenNumbers2 = numbers.filter((item) => !Boolean(item%2));

console.log(evenNumbers2);

//
const evenNumbers3 = numbers
  .map((item) => {
    if (item % 2 === 0) {
        return item;
    } else {
        return null;
    }
  })
  .filter(Boolean);

  console.log(evenNumbers3);
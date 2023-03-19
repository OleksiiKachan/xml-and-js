// Array.prototype.reduce()
const array1 = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = array1.reduce((acc, cur) => acc + cur, initialValue);
console.log(sumWithInitial);

const array2 = [15, 16, 17, 18, 19];
function reducer(accum, current, index){
    const returns = accum + current;
    const return2 = accum + current;
    console.log(`Accumulator: ${accum}, Current: ${current}, index: ${index}, returns: ${returns}`,);
    console.log(return2);
    return returns;
}

array2.reduce(reducer);
let arrOne = [32, 45, 63, 36, 24, 11]

//map takes a maximum of three arguments, which are value/element, index, and array

function multFive (num) {
    return num * 5;
}

let arrTwo = arrOne.map(multFive)
console.log(arrTwo)
const add = (firstParam, secondParam) => {
    return firstParam + secondParam;
};

console.log(add(2,5));

const hof = (arg) =>{
    arg();
    console.log('hof');
};

hof(() => {
    console.log('arg');
});
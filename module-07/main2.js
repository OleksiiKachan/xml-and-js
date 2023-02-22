// const add = (firstParam, secondParam) => {
//     return firstParam+ secondParam;
//     };
// console.log(add(2,5));


// const add2 = () => {
//     console.log(`here`);
// }
// //consule is not defined
// consule.log(add2());


const hof = (arg) => {
    arg();
    console.log(`I'm hof`);
};

const argFunc = (arg) => {
    console.log(`I'm arg`);
};
hof(argFunc);


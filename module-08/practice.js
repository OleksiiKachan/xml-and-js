const wait = (ms = 2000) => new Promise((resolve)=>setTimeout(resolve, ms));
const func1 = new Promise((resolve)=>wait().then(() =>resolve(`func1`)));


// const func2 = new Promise((resolve) => resolve(`func2`));
const func2 = new Promise((resolve)=>wait().then(() =>resolve(`func2`)));

const func3 = new Promise((resolve) => resolve(`func3`));


const main = () => {
Promise.all([func1, func2, func3]).then((values) => {
  console.log(values);
});
}

main();

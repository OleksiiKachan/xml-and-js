const func1 = new Promise((resolve) => resolve(`func1`));

const func2 = new Promise((resolve) => resolve(`func2`));

const func3 = new Promise((resolve) => resolve(`func3`));

const main = () => {

// call func1, func2, and func3. wait until ALL of them are resolve and console.log resolved result

Promise.all([func1, func2, func3]).then((values) => {
    console.log(values);});
}

main();
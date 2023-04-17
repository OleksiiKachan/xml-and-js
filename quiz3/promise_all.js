/**
 * n01551519
 * Rutwa Dave
 */
const func1 =  Promise.resolve(`func1`);
const func2 =  Promise.resolve(`func2`);
const func3 =  Promise.resolve(`func3`);

const main = () => {
    Promise.all([func1, func2, func3])
        .then((result) => console.log(result));
};

main();
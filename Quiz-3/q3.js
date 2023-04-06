const func1 = new Promise((resolve) => resolve(`func1`));

const func2 = ()=> new Promise((resolve) => resolve(`func2`));

const func3 = new Promise((resolve) => resolve(`func3`));


//async and await are used to wait for the Promise returned by Promise.all to resolve 
//before assigning its value to the results variable and logging it to the console.
const main = async () => {
    const promise = [func1, func2(), func3];
    const result = await Promise.all(promise);
    console.log(result);
}

main();
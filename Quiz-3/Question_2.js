const func1 = new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));

const main = async () => {
    const [result1, result2, result3] = await Promise.all([func1, func2, func3]);
    const total = `${result1}, ${result2}, ${result3}`;
    console.log(total);
  };
  
main();
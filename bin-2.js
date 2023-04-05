//B.Ramakrishna Likith
//N01553398

const func1 = new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 =()=> new Promise((resolve) => resolve(`func3`));

const main = async () => {
  const results = await Promise.all([func1, func2, func3()]);
  const output = results.join(", ");
  console.log(output);
};

main();

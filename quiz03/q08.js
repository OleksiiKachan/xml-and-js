const func1 = new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));

const main = async () => {
  // outputs in a single variable
  const result_list = await Promise.all([func1, func2, func3]);
  //   console.log this variable.
  console.log(result_list);
};

main(); //[ 'func1', 'func2', 'func3' ]

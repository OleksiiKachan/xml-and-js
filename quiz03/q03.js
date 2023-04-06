const xFunc = (...args) =>
  new Promise((resolve, reject) => {
    if (args.length > 0) {
      resolve(args);
    } else {
      reject(new Error("no arguments"));
    }
  });

// test
const main = async () => {
  const result01 = await xFunc(1, 2, 3).catch((error) => error.message);
  console.log(result01);

  const result02 = await xFunc().catch((error) => error.message);
  console.log(result02);
  
  const result03 = await xFunc(`value`, 15, {}).catch((error) => error.message);
  console.log(result03);
};

main();
// [ 1, 2, 3 ]
// no arguments
// [ 'value', 15, {} ]

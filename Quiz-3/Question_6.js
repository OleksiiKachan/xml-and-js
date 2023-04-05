function func(...args) {
  return new Promise((resolve, reject) => {
    if (args.length > 0) {
      resolve(args);
    } else {
      reject(new Error('No arguments provided'));
    }
  });
}

async function example() {
  try {
    const result1 = await func(1, 2, 3);
    console.log(result1); // [1, 2, 3]

    const result2 = await func('value', 15, {});
    console.log(result2); // ['value', 15, {}]

    const result3 = await func();
    console.log(result3);
  } catch (error) {
    console.log(error.message); // 'No arguments provided'
  }
}

example();

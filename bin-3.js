//B.Ramakrishna Likith
//N01553398

const func = (...args) => {
  return new Promise((resolve, reject) => {
    if (args.length === 0) {
      reject('Error: No arguments passed');
    } else {
      resolve(args);
    }
  });
};

func(1, 2, 3)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

func('value', 15, {})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

func()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

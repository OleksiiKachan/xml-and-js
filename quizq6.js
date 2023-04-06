const func1 =()=> new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));


const main = () => {
    Promise.all([func1(), func2, func3])
      .then((results) => {
        console.log(results);
      })
      .catch((error) => {
        console.error(error);
      });
};

main();
const func1 = new Promise((resolve) => resolve(`func1`));
const func2 =()=> new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));

const main = () => {
  Promise.all([func1, func2(), func3])//promise.all is waiting for all the promises to resolve and log resolved values in array
    .then((data) => { //handles the resolved value
      console.log(data);
    })
    .catch((error) => {
      console.error(error);//handles any errors
    });
};

fun2

main();
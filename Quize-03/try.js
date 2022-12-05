
/*Update this code to call func1-3 function, have their outputs in a single variable and console.log
 this variable.
Hint: use Promise.all
*/
const func1 = new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));

const main = () => {
    Promise.all([func1, func2, func3]).then((AllValues) => {
        console.log(AllValues[1]);
      });
}
main()
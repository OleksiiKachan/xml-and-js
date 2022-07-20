const func1 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve();
    }, 1 * 1000);
  });
  const func2 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve();
    }, 2 * 1000);
  });
  const func3 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve();
    }, 3 * 1000);
  });



const main = () => {

// call func1, func2, and func3. wait until ALL of them are resolve and console.log resolved result
Promise.all([func1, func2, func3]).then((values) => {
    console.log(values);

})};
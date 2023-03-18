// Name: wenhao fang
// ID: n01555914

/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateRandomNumber = () => Math.floor(Math.random() * 40);

const generateData = () =>
  new Promise((resolve) => {
    timeout(2000).then(() => {
      const data = Array.from({ length: 20 }, generateRandomNumber);
      resolve(data);
    });
  });

const convertToFeet = (meters) =>
  new Promise((resolve) => {
    const feet = meters * 3.2808;
    timeout(3500).then(() => resolve(feet));
  });

const processData = (data) =>
  new Promise((resolve) => {
    data.map((value) => resolve(value));
  });

const logResult = (meters, feet) =>
  console.log(`Converted ${meters}m to ${feet}ft`);

const main = () =>
  new Promise((resolve) => {
    resolve();
  });

main()
  .then(() => console.log("Start"))
  .then(() => generateData())
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => processData(data))
  .then((data) => console.log(data))
  .then(() => console.log("finish"));

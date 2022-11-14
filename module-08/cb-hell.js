/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 40);
}

const generateData = async () => {
  await timeout(1000)
  return Array.from({ length: 20 }, generateRandomNumber);
}

const convertToFeet = async (meters) => {
  await timeout(3500);
  const feet = meters * 3.2808;
  return feet;
}

const processData = async (data) => {
  // return new Promise((resolve, reject) =>{
  //   resolve(data.map(convertToFeet))
  // });
  return await Promise.all(data.map(value => convertToFeet(value).then(res => logResult(value, res))))
}

const logResult =  (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

(async () => {
  console.log("Start");
  const generate = await generateData();
  await processData(generate);
  console.log("Finish");
})();

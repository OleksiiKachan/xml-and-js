/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms, callback) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const generateRandomNumber = () =>  Math.floor(Math.random() * 40);

const generateData = async ()  => {
  await timeout(1000);
  const data = Array.from({ length: 20 }, generateRandomNumber);
  return data;
}

const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  await timeout(3500);
  return feet;
}

const processData =  (data) => {
  data.map(function (value) {
    return value;
  });
}

const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

const main = async () => {
  console.log("Start");
  const data = await generateData();
  const value = processData(data);
  const result = await convertToFeet(value);
  logResult(value, result);
  console.log("Finish");
}

main();

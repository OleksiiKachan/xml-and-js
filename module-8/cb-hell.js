/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = async (ms) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const generateRandomNumber = () =>  Math.floor(Math.random() * 40);

const generateData = async ()  => {
  await timeout(1000);
  return Array.from({ length: 20 }, generateRandomNumber);
}

const convertToFeet = async (meters) => {
  await timeout(3500);
  logResult(meters, meters * 3.2808);
}

const processData =  async (data, callback) => Promise.all(data.map(value  => callback(value)));

const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

const main = async () => {
  console.log("Start");
  const data = await generateData();
  await processData(data, convertToFeet);
  console.log("Finish");
}

main();

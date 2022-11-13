/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */
const timeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, ms);
  })
} 

const generateRandomNumber = () => Math.floor(Math.random() * 40);

const generateData = () => new Promise((resolve) => timeout(1000).then(() => resolve(Array.from({ length: 20 }, generateRandomNumber))));

const convertToFeet = (meters) => new Promise((resolve) => timeout(3500).then(() => resolve(meters * 3.2808)));

const processData = async (data) => await Promise.all(data.map(e => convertToFeet(e).then((f) => logResult(e, f))));

const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

(async () => {
  console.log("Start");
  const data = await generateData();
  await processData(data);
  console.log("Finish");
})();
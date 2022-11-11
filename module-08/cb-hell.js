/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}

const generateData = async () => {
  await timeout()
  return Array.from({ length: 20 }, generateRandomNumber)
}

const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    //callback(feet);
  });
}

const processData = async (data) => {
  data.map(function (value) {
    //callback(value);
  });
}

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

function main() {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  const data = generateData()
  

  console.log("Finish");
}

main();

/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const generateRandomNumber = () => Math.floor(Math.random() * 40);

async function generateData() {
  await timeout(1000);
  return Array.from({ length: 20 }, generateRandomNumber);
}

async function convertToFeet(meters) {
  const feet = meters * 3.2808;
  await timeout(3500);
  return feet;
}

async function processData(data) {
  for (const value of data) {
    const result = await convertToFeet(value);
    logResult(value, result);
  }
}

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

async function main() {
  console.log("Start");
  
  const data = await generateData();
  
  await processData(data);

  console.log("Finish");
}

main();
/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout2 = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const generateRandomNumber2 = () => Math.floor(Math.random() * 40);

  const generateData2 = async () => {
    await timeout2(1000,()=>{});
    const data = Array.from({ length: 20 }, generateRandomNumber2);
    return data;
  }

  const convertToFeet2 = async (meters) => {
    const feet = meters * 3.2808;
    timeout2(3500, function () {
      callback(feet);
    });
    await timeout2(3500);
    logResult2(meters, feet)
  }

const processData2 = async (data) => {
  await Promise.all(data.map(value => convertToFeet2(value))); 
}

const logResult2 = (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

const main = async () => {
  console.log("Start");
  const data = await generateData2()
  await processData2(data)
  console.log("Finish");
}

console.log("With async");
main();


/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

 const timeout = (ms) =>  new Promise((resolve) => {
  setTimeout(() => {
  resolve();
}, ms);
});

const generateRandomNumber = () =>  Math.floor(Math.random() * 40);

const generateData = async() => {
await timeout(1000)
return Array.from({ length: 20 }, generateRandomNumber);
}

const convertToFeet = async(meters) => {
const feet = meters * 3.2808;
await timeout(3500)
return feet
}

function logResult(meters, feet) {
console.log(`Converted ${meters}m to ${feet}ft`);
}

const main = async() => {
console.log("Start");
const data = await generateData();
for(let i = 0; i < data.length; i++){
const x = data[i];
const result = await convertToFeet(x);
logResult(x, result);
}
console.log("Finish");
}

main();
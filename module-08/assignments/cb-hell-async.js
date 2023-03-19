//Define a new Promisse passing ms = 1500
const timeout = (ms = 1500) => new Promise(resolve => setTimeout(resolve, ms));

//Define a generate Random Number not async
const generateRandomNumber = function () {
  return Math.floor(Math.random() * 40)
}

//Define a const out of a function passing ms as the argument for timeout 
const generateData = async function (ms){
  await timeout(ms)
  return Array.from({ length: 20 }, generateRandomNumber);
}

//Define a const to convertToFeet passing meters and ms as argument
const convertToFeet = async function(meters, ms) {
  const feet = meters * 3.2808;
  await timeout(ms)
  return feet;
}

//Define a const processData as a async function passing data and ms as argument. 
const processData = async function (data, ms){
  //for loop to print each line with a timeout define as ms
  for (const value of data){
    const result = await convertToFeet(value, ms)
    logResult(value, result)
  }
}

//Define a logResult const as an async function passing meters and feet
const logResult = function(meters, feet){
  console.log(`Converted ${meters}m to ${feet}ft`)
}

//Define a main const as a async function passing ms as an argument
const main = async function (ms) {
  console.log("Start");
  const data = await generateData(ms);
  await processData(data, ms)
  console.log("Finish");
}

//Execute main() function
main();

/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */
 const timeout = (ms = 1000) => new Promise((resolve)=> setTimeout(resolve,ms));

/*function timeout(ms, callback) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
}
*/

/*const generateRandomNumber = async () =>
await timeout().then (()=> (Math.floor(Math.random() * 40)));
*/

const generateRandomNumber = () => Math.floor(Math.random() * 40);
/*
function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}

function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}

*/

const generateData = async () => {
await timeout()
return Array.from({ length: 20 }, generateRandomNumber);
    
}

/*
function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}
*/

const convertToFeet = async(meters) => {
  const feet = meters * 3.2808;
  await timeout();
  logResult(meters, feet)

}

/*
function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}

*/
const processData = async (data) => {

  await timeout(4000).then (data.map(value => convertToFeet(value)));
}

/*
function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}
*/

const logResult = (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}


/*
function main() {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  console.log("Finish");
}

main();
*/

const main = async() => {

  console.log("Start");
  const data = await generateData()
  await processData(data)

  console.log("Finish");

}

main();
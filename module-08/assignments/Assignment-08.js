/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

// function timeout(ms, callback) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//       callback();
//     }, ms);
//   });
// }

const timeout = async(ms)=>{
  return setTimeout(()=>ms)

}

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 40);
// }

const generateRandomNumber = (
  ()=> Math.floor(Math.random()*40)
);

// function generateData(callback) {
//   timeout(1000, function () {
//     const data = Array.from({ length: 20 }, generateRandomNumber);
//     callback(data);
//   });
// }

const generateData = async () => {
	await timeout(1000);
	return processData(Array.from({ length: 20 }, generateRandomNumber));
};

// function convertToFeet(meters, callback) {
//   const feet = meters * 3.2808;
//   timeout(3500, function () {
//     callback(feet);
//   });
// }

const convertToFeet = async (meters) => {
	await timeout(3500);
	return logResult(meters, meters * 3.2808);
};

// function processData(data, callback) {
//   data.map(function (value) {
//     callback(value);
//   });
// }
const processData = async (data) => {
  data.map(async (value) => {
    return convertToFeet(value);
  });
}

// function logResult(meters, feet) {
//   console.log(`Converted ${meters}m to ${feet}ft`);
// }

const logResult = async (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

async function main() {
  console.log("Start");
  await generateData();
  console.log("Finish");
}

// function main() {
//   console.log("Start");
//   generateData(function (data) {
//     processData(data, function (value) {
//       convertToFeet(value, function (result) {
//         logResult(value, result);
//       });
//     });
//   });
main();




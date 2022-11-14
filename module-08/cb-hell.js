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

const timeout = (ms,callback) => new Promise( resolve => { 
  setTimeout( ()=> {
    resolve(); 
    callback();
  }, ms) });



// function generateRandomNumber() {
//   return Math.floor(Math.random() * 40);
// }

const generateRandomNumber = () => Math.floor(Math.random() * 40);



// function generateData(callback) {
//   timeout(1000, function () {
//     const data = Array.from({ length: 20 }, generateRandomNumber);
//     callback(data);
//   });
// }

// const generateData = callback => { 
//   timeout(1000, () => { 
//     const data = Array.from({ length: 20 }, generateRandomNumber); 
//     callback(data);
//   })
// }

const generateData = () => new Promise( resolve => { 
    timeout(1000, () => { 
      const data = Array.from({ length: 20 }, generateRandomNumber); 
      resolve(data);
    });
  } 
);



// function convertToFeet(meters, callback) {
//   const feet = meters * 3.2808;
//   timeout(3500, function () {
//     callback(feet);
//   });
// }

// const convertToFeet = (meters, callback) => {
//   const feet = meters * 3.2808;
//   timeout(3500, () => {
//     callback(feet);
//   });
// }

const convertToFeet = (meters) => new Promise( resolve => {
  const feet = meters * 3.2808;
  timeout(3500, () => {
    resolve(feet);
  });
})


// function processData(data, callback) {
//   data.map(function (value) {
//     callback(value);
//   });
// }

// const processData = (data, callback) => {
//   data.map( value => {
//     callback(value);
//   })
// }

const processData = (data, callback) => new Promise(
  (resolve) => {
    const converted = Promise.all(data.map(callback));
    resolve(converted);
  }
)


// function logResult(meters, feet) {
//   console.log(`Converted ${meters}m to ${feet}ft`);
// }

const logResult = (metersArr,feetArr) => {
  for(let index in metersArr)
    console.log(`Converted ${metersArr[index]}m to ${feetArr[index]}ft`);
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
//   console.log("Finish");
// }

// const main = () => {
//   console.log("Start");
//   generateData( (data) => {
//     processData(data, (value) => {
//       convertToFeet(value, (result) => {
//         logResult(value, result);
//       });
//     });
//   });
//   console.log("Finish");
// }

const main = async() => {
  console.log("Start");
  const dataArr = await generateData();
  const resultArr = await processData(dataArr, convertToFeet);
  logResult(dataArr, resultArr);
  console.log("Finish");
}



main();

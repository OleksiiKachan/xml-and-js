/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */
//----------------------------------------------------------------------

// function timeout(ms, callback) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//       callback();
//     }, ms);
//   });
// }


const timeout = (ms)=> new Promise((resolve) =>
setTimeout(resolve,ms));
//--------------------------------------------------------------------------  
    
  
// function generateRandomNumber() {
//   return Math.floor(Math.random() * 40);
// }

const generateRandomNumber = () => Math.floor(Math.random() * 40);
  
//--------------------------------------------------------------------------

// function generateData(callback) {
//   timeout(1000, function () {
//     const data = Array.from({ length: 20 }, generateRandomNumber);
//     callback(data);
//   });
// }

const generateData = () => new Promise((resolve)=>
timeout(1000).then(() => resolve (Array.from({ length: 20 }, generateRandomNumber) )))
  

// const generateData = async () => {
//   await timeout()
//   return Array.from({ length: 20 }, generateRandomNumber)
// }

//--------------------------------------------------------------------------

// function convertToFeet(meters, callback) {
//   const feet = meters * 3.2808;
//   timeout(3500, function () {
//     callback(feet);
//   });
// }

const convertToFeet = async(meters) => {
await timeout(3500)
const feet = meters * 3.2808;
return feet;

}

//-------------------------------------------------------------

// function processData(data, callback) {
//   data.map(function ("value") {
//                             callback(value);
//                             });
// }

const processData = async (data) => 
await Promise.all(data.map((meters) => convertToFeet(meters).then((feet) => logResult(meters, feet))));

//--------------------------------------------------------------

// function logResult(meters, feet) {
//   console.log(`Converted ${meters}m to ${feet}ft`);
// }

const logResult = (meters,feet) => 
console.log(`Converted ${meters}m to ${feet}ft`);



  const main = async () => {
    console.log("Start");
    const data = await generateData();
    await processData(data);
    console.log("Finish");
  }
  
  main();
   
    
  
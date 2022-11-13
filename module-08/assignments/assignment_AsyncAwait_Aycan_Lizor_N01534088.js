/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */
//----------------------------------------------------------------------
//  function timeout(ms, callback) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve();
//         callback();
//       }, ms);
//     });
//   }




timeout = (ms, callback) =>{
return new Promise (function (resolve) {
         setTimeout(function () {
          resolve();
          callback();
        }, ms);
      });
};
//--------------------------------------------------------------------------  
  
//   function generateRandomNumber() {
//     return Math.floor(Math.random() * 40);
//   }

  generateRandomNumber =() => {
     return Math.floor(Math.random() * 40);
  }

//--------------------------------------------------------------------------


  async function generateData (callback) {
    
    await timeout(1000,generateRandomNumber);
     
    const data = (Array.from({ length: 20 }, generateRandomNumber));
   
    callback(data);
  };
  
   
//-----------------------------------------------------------------------------
  

  async function convertToFeet (meters, callback) {
    
   await timeout(3500, generateData);
   const feet = meters * 3.2808;
   callback(feet);
    
  };  
//-------------------------------------------------------------------------------

  processData = (data, callback) => 
    data.map(function (value) {
      callback(value);
    });
 //------------------------------------------------------------------------------ 

  logResult = (meters, feet)=>
    console.log(`Converted ${meters}m to ${feet}ft`);
  
//--------------------------------------------------------------------------------  

//   function main() {
//     console.log("Start");
//     generateData(function (data) {
//       processData(data, function (value) {
//         convertToFeet(value, function (result) {
//           logResult(value, result);
//         });
//       });
//     });
//     console.log("Finish");
//   }

   main =() =>
    console.log("Start");
    generateData(function (data) {
      processData(data, function (value) {
       convertToFeet(value, function (result) {
          logResult(value, result);
        });
      });
    });
    console.log("Finish");
   
  main();

 
  

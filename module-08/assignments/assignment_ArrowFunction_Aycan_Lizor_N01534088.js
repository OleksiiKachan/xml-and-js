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
//  function generateData(callback) {
//     timeout(1000, function () {
//       const data = Array.from({ length: 20 }, generateRandomNumber);
//       callback(data);
//     });
//   }

  generateData = (callback) => 
    
  timeout(1000, function () {
      const data = Array.from({ length: 20 }, generateRandomNumber);
      callback(data);
    });


  
//-----------------------------------------------------------------------------
  
//   function convertToFeet(meters, callback) {
//     const feet = meters * 3.2808;
//     timeout(3500, function () {
//       callback(feet);
//     });
//   }

  convertToFeet = (meters, callback) => {
    const feet = meters * 3.2808;
    timeout(3500, function () {
      callback(feet);
    });
  }  
//-------------------------------------------------------------------------------

//   function processData(data, callback) {
//     data.map(function (value) {
//       callback(value);
//     });
//   }


  processData = (data, callback) => 
    data.map(function (value) {
      callback(value);
    });
 //------------------------------------------------------------------------------ 
 
//   function logResult(meters, feet) {
//     console.log(`Converted ${meters}m to ${feet}ft`);
//   }
  
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

  main2 = ()=> new Promise((resolve, reject) => {

    resolve('Success!')
    
    })
    
    .then(() => {
    
    throw Error('Oh no!')
    
    })
    
    .catch(error => {
    
    return "actually, that worked"
    
    })
    
    .catch(error => console.log(error.message));

    main2();



 
  

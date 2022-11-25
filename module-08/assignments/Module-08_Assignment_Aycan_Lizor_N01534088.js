/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */
//----------------------------------------------------------------------

const { resolve } = require("path");

// timeout = (ms, callback) =>{
//   return new Promise (function (resolve) {
//            setTimeout(function () {
//             resolve();
//             callback();
//           }, ms);
//         });
//   };

  const timeout = (ms) => new Promise((resolve) => setTimeout(resolve,ms))
  //--------------------------------------------------------------------------  
      
  const generateRandomNumber = () => Math.floor(Math.random() * 40);
     
  //--------------------------------------------------------------------------
  
  
    // generateData = (callback) => 
      
    // timeout(1000, function () {
        
    //       const data = Array.from({ length: 20 }, generateRandomNumber);
    //     callback(data);
    //   });
  
  const  generateData = () => new Promise((resolve) =>
  timeout(1000).then(() => resolve(Array.from({ length: 20 }, generateRandomNumber))));
   
  
  // const generateData = async () => {
  //   await timeout()
  //   return Array.from({ length: 20 }, generateRandomNumber)
  // }
  
  //-----------------------------------------------------------------------------
    
  
  
    // convertToFeet = (meters, callback) => {
    //   const feet = meters * 3.2808;
    //   timeout(3500, function () {
    //     callback(feet);
    //   });
    // }  

    const convertToFeet = (meters) => new Promise ((resolve) => 
    timeout(3500).then(() => resolve (meters * 3.2808)));
    
    // const convertToFeet = async (meters) => {
    //   const feet = meters * 3.2808;
    //   await timeout(3500);
    //   logResult(meters, feet)
    // }
    


  //-------------------------------------------------------------------------------
      
    const processData = async (data) => await Promise.all(data.map((meters) => convertToFeet(meters).then((feet) => logResult(meters,feet))));
      
   //------------------------------------------------------------------------------ 
   
   const  logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);
         
    
  //--------------------------------------------------------------------------------  
  
  
    //  main =() =>
    //   console.log("Start");
    //   generateData(function (data) {
    //     processData(data, function (value) {
    //       convertToFeet(value, function (result) {
    //         logResult(value, result);
    //       });
    //     });
    //   });
    //   console.log("Finish");
     
    // main();

    (async () => {
      console.log("Start");
      const data = await generateData();
      await processData(data);
      console.log("Finish");
    })();
   
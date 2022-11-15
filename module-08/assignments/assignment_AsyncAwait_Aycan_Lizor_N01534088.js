/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */
//----------------------------------------------------------------------




timeout = (ms, callback) =>{
  return new Promise (function (resolve) {
           setTimeout(function () {
            resolve();
            callback();
          }, ms);
        });
  };
  //--------------------------------------------------------------------------  
    
  
    const generateRandomNumber = async function () {
       return Math.floor(Math.random() * 40);
    }

  
  
  //--------------------------------------------------------------------------
  
  
    // generateData = (callback) => 
      
    // timeout(1000, function () {
        
    //       const data = Array.from({ length: 20 }, generateRandomNumber);
    //     callback(data);
    //   });
  
  const  generateData = async function (){
      await timeout(1000, callback);
      return Array.from({ length: 20 }, generateRandomNumber);

  }
    
  //-----------------------------------------------------------------------------
    
  
  
    // convertToFeet = (meters, callback) => {
    //   const feet = meters * 3.2808;
    //   timeout(3500, function () {
    //     callback(feet);
    //   });
    // }  

    const convertToFeet = async function (meters){
        await timeout (3500, callback);
        const feet = meters * 3.2808 ;
        return feet ;

    }


  //-------------------------------------------------------------------------------
      
    const processData = async function (data) {
       await timeout(1000, callback);
      data.map(function (value) {
        callback(value);
      });

      return value;
    }
   
      
   //------------------------------------------------------------------------------ 
   
   const  logResult = async function (meters, feet) {
    console.log(`Converted ${meters}m to ${feet}ft`);
   }
      
    
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

      (async() => {

        console.log("generateRandomNumber: ", generateRandomNumber());
        console.log("generateData: ", await generateData());
        console.log("convertToFeet: ", await convertToFeet(meters));
        console.log("processData:", await processDat(data) );
        console.log ("logResult: ", logResult(meters,feet));

      })();
  
   
    
  
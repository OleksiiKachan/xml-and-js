//Vishal Kumar
//n01496099

// function timeout(ms, callback) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve();
//         callback();
//       }, ms);
//     });
//   }

function timeout(ms) {
    return new Promise((resolve, reject) => 
    {
           const check = true;
             if (check==true) {
        setTimeout(function () {
                   resolve();
                   
                  },ms);
                        }     else {
        reject("FAILURE")
      }
    })
 
}

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 40);
//   }
  


 generateRandomNumber=() =>
    {
        const check = true;
        if (true) {           
            return Math.floor(Math.random() * 40);
                            }     
                            else {                      
                 reject("FAILURE")
          
        }

    }



// function generateData(callback) {
//     timeout(1000, function () {
//       const data = Array.from({ length: 20 }, generateRandomNumber);
//       callback(data);
//     });
//   }

const generateData = async () => {
    const check = true;
    if (true){ await timeout(1000);
        return Array.from({ length: 20 }, generateRandomNumber);}
        else
        {                      
            reject("FAILURE")
     
   }
   
  };

//   function convertToFeet(meters, callback) {
//     const feet = meters * 3.2808;
//     timeout(3500, function () {
//       callback(feet);
//     });
//   }  


const convertToFeet = async (meters) =>
    {   
        const check = true;
        if (true){
        await timeout(1000);
        return meters * 3.2808;}
        else
        {                      
            reject("FAILURE")
     
   }
};
    


// function processData(data, callback) {
//     data.map(function (value) {
//       callback(value);
//     });
//   }


//  async function processData (data, callback) {
//         const List = data.map(async (value) =>          await callback(value));
//         return await Promise.all(List);
//   };
const processData = async(data, callback) => {
    const ls = data.map(async (value) => await callback(value));
    return await Promise.all(ls);
  };



//   function logResult(meters, feet) {
//     console.log(`Converted ${meters}m to ${feet}ft`);
//   }

function logResult(meters, feet) {

    return new Promise((resolve,reject)=>
    {
        const check = true;
        if (true) {           
           resolve( console.log(`Converted ${meters}m to ${feet}ft`))
                            }     
                            else {                      
                 reject("FAILURE")
          
        }
    })

}

// function main() {
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
  
//   main();


(async () => {console.log("Start");List = await generateData();  heightInFeet = await processData(List, convertToFeet);
    for (let i = 1; i < List.length; i++) {logResult(parseInt(List[i]), parseInt(heightInFeet[i]));}
    console.log("Finish");
  })();








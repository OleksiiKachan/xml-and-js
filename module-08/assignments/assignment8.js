  console.log("----");
  async (ms,callback)=>{
    await timeout(2000);
    return new Promise(async (resolve) => {
      setTimeout(async() =>{
        resolve();
        callback();
      }, ms);
    });
  }
  
  let generateRandomNumber = async () =>{ 
    await timeout(1000);
    Math.floor(Math.random() * 40)};

  let generateData = async (callback) => {
    await timeout(1000,() => {
      const data = Array.from({ length: 20 }, generateRandomNumber);
      callback(data);
    });
  }

 let convertToFeet = async (meters, callback) => {
    const feet = meters * 3.2808;
    await timeout(3500, () => {
      callback(feet);
    });
  }
  
  let processData= async (data, callback) =>{
    await timeout(2000);
    data.map((value)=> {
      callback(value);
    });
  }
  
  let logResult= async (meters, feet)=> {
    await timeout(2000);
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  let  main = async  () =>{
      console.log("Start");
    generateData(async (data) =>{
      processData(data, async (value)=> {
        convertToFeet(value,async (result)=> {
          logResult(value, result);
        });
      });
    });
    console.log("Finish");
  }
  
  main();

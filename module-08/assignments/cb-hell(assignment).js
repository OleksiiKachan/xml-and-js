const timeout = (ms, callback) => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
        callback();
      }, ms);
    });
  }
  
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
  }
  
  const generateData = async () => {
    await timeout(1000,()=>{});
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return data;
  }
  
  const convertToFeet = async(meters) => {
    await timeout(3500, () => {});
    const feet = await meters.map((value) => {
        return (value*3.2808);
    });
    return feet;
  }
  
  const processData = async(data) => {
    return await data.map((value) => {
        return value;
    });
  }
  
  const logResult = async (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  const main = async() => {
    console.log("Start");
    const data = await generateData();
    const meters = await processData(data);
    const feets = await convertToFeet(meters);
    
    await logResult(meters,feets);
    console.log("Finish");
  }
  
  main();
  
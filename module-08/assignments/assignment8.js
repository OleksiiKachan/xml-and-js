const timeout = (ms, callback) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        callback();
      }, ms);
    });
  }
  
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
  }
  
  const generateData = async () => {
    return new Promise(resolve => {
      timeout(1000, () => {
        const data = Array.from({ length: 20 }, generateRandomNumber);
        resolve(data);
      });
    });
  }
  
  const convertToFeet = async meters => {
    return new Promise(resolve => {
      const feet = meters * 3.2808;
      timeout(3500, () => {
        resolve(feet);
      });
    });
  }
  
  const processData = async data => {
    const results = await Promise.all(data.map(async value => {
      const result = await convertToFeet(value);
      return [value, result];
    }));
    return results;
  }
  
  const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  const main = async () => {
    console.log("Start");
    const data = await generateData();
    const results = await processData(data);
    results.forEach(result => logResult(result[0], result[1]));
    console.log("Finish");
  }
  
  main();
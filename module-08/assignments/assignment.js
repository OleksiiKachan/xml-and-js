const timeout = async (ms) => {
    return setTimeout(() => ms);
  }
  
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
  }
  
  const generateData = async () => {
    await timeout(1000);
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return data;
  }
  
  const convertToFeet = async (meters) => {
    const feet = meters * 3.2808;
    await timeout(3500);
    return feet;
  }
  
  const processData = async () => {
    const data = await generateData();
    const results = await Promise.all(data.map(async value => {
      const result = await convertToFeet(value);
      return { meters: value, feet: result };
    }));
    return results;
  }
  
  const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  const main = async () => {
    console.log("Start");
    const results = await processData();
    results.forEach(({ meters, feet }) => {
      logResult(meters, feet);
    });
    console.log("Finish");
  }
  
  main();
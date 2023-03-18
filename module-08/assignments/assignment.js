const timeout = async (ms) => {
    setTimeout(() => {}, ms);
  };

  const generateRandomNumber = () => 
  {
    return Math.floor(Math.random() * 40);
  };
    const generateData = async () => 
  {
    await timeout(1000); 
    await processData(Array.from({ length: 20 }, generateRandomNumber)); 
  };

  const convertToFeet = async (meters) => 
  {
    const feet = meters * 3.2808;
    await timeout(3500);
    await logResult(meters, feet);
  };
  const processData = async (data) => 
  {
   
    data.map(async (value) => {
      await convertToFeet(value);
    });
  };

  const logResult = async (meters, feet) => 
  {
   
    console.log(`Converted ${meters}m to ${feet}ft`);
  };

  const main = async () => 
  {
    console.log("Start");
    await generateData();
    console.log("Finish");
  };

  main();
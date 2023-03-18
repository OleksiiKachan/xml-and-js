//define timeout function
const timeout = async (ms) => {
    setTimeout(() => {}, ms);
  };

//this function will generate randomnumber 
  const generateRandomNumber = () => 
  {
    return Math.floor(Math.random() * 40);
  };

  
  const generateData = async () => 
  {
    await timeout(1000); //here it will call timeout function and wait for 1 sec 
    await processData(Array.from({ length: 20 }, generateRandomNumber)); // get the array of 20 random num using above fun
  };

  //define fun which converts meters to feet
  const convertToFeet = async (meters) => 
  {
    const feet = meters * 3.2808;
    await timeout(3500);
    //wait for 3.5 sec before logResult
    await logResult(meters, feet);
  };

  //this fun aceepts array of numbers
  const processData = async (data) => 
  {
    //loop throght all value in array and call the above fun
    data.map(async (value) => {
      await convertToFeet(value);
    });
  };

  const logResult = async (meters, feet) => 
  {
    //will print the message in console
    console.log(`Converted ${meters}m to ${feet}ft`);
  };

  const main = async () => 
  {
    console.log("Start");
    await generateData();
    console.log("Finish");
  };

  main();

function timeout(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  async function generateRandomNumber() {
    await timeout(2000);
    return Math.floor(Math.random() * 40);
  }

  async function generateData() {
    await timeout(1000);
    const data = await Promise.all(
    Array.from({ length: 20 }, generateRandomNumber));
    return data;
  }

 async function convertToFeet(meters) {
    await timeout(1000);
    const feet = meters * 3.2808;
    return feet;
  }

  async function processData(data) {
    const result = await Promise.all(
        data.map(async (value) => ({
          parsed: await convertToFeet(value),
          original: value,
        }))
      );
    
      return result;
  }
  
  function logResult(meters, feet) {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }

  (async() =>
  {
    console.log("start");
    const data = await generateData();
    const parsed=await processData(data);
    parsed.map(({ original, parsed }) => 
    logResult(original, parsed));
    
  })
  ();
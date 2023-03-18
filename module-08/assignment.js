  async function timeout(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  
  async function generateData() {
    await timeout(1000);
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return data;
  }
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 40);
  }
  
  async function convertToFeet(meters) {
    const feet = meters * 3.2808;
    await timeout(3500);
    return feet;
  }
  
  async function processData(data) {
    for (const value of data) {
      const result = await convertToFeet(value);
      logResult(value, result);
    }
  }
  
  function logResult(meters, feet) {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  async function main() {
    console.log("Start");
    const data = await generateData();
    await processData(data);
    console.log("Finish");
  }
  
  main();
  
const timeout = (ms = 1000) => 
new Promise((resolve)=>
setTimeout(resolve, ms));

const generateRandomNumber = ()=> 
Math.floor(Math.random() * 40);

const generateData = async () => {
  await timeout(1000,()=> {});
  const data = Array.from({ length: 20 }, generateRandomNumber);
  return data;
}
const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
  await timeout(3500);
  logResult(meters, feet)
}

const processData = async (data) => {
  await Promise.all(data.map(value => 
    convertToFeet(value))); 
}

const logResult = (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

const main = async () => {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  const data = await generateData()
  await processData(data)
  console.log("Finish");
}

main();
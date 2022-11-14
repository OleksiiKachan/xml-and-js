function timeout(ms, callback) {
  return new Promise(function (resolve) {
const timeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
}
  })
} 

function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}
const generateRandomNumber = () => Math.floor(Math.random() * 40);

function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}
const generateData = () => new Promise((resolve) => timeout(1000).then(() => resolve(Array.from({ length: 20 }, generateRandomNumber))));

function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}
const convertToFeet = (meters) => new Promise((resolve) => timeout(3500).then(() => resolve(meters * 3.2808)));

function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}
const processData = async (data) => await Promise.all(data.map(e => convertToFeet(e).then((f) => logResult(e, f))));

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}
const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

function main() {(
  async () => {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  
  const data = await generateData();
  await processData(data);
  console.log("Finish");
})};

main();
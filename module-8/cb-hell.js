/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

/*function timeout(ms, callback) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}

function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}

function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}

function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

function main() {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  console.log("Finish");
}

main();*/

const timeout = (ms) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
};

generateRandomNumber = () => {
  return Math.floor(Math.random() * 40);
};

generateData = async () => {
  await timeout(1000);
  return Array.from({ length: 20 }, generateRandomNumber);
};

convertToFeet = async (meters) => {
  await timeout(1000);
  return meters * 3.2808;
};

const processData = async (data, callback) => {
  const List = data.map(async (value) => await callback(value));
  return await Promise.all(List);
};

logResult = (meters, feet) => {
  console.log(`CONVERTED ${meters} m TO ${feet} ft`);
};

(async () => {
  console.log("-------------START-------------");
  const randomDataList = await generateData();
  const heightInFeet = await processData(randomDataList, convertToFeet);
  for (let i = 0; i < randomDataList.length; i++) {
    logResult(randomDataList[i], heightInFeet[i]);
  }
  console.log("-------------FINISH-------------");
})();

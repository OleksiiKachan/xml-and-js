timeout = (ms) => {
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
  await timeout(2000);
  return Array.from({ length: 20 }, generateRandomNumber);
};

convertToFeet = async (meters) => {
  await timeout(2000);
  return meters * 3.2808;
};

const processData = async (data, callback) => {
  const dataList = data.map(async (value) => await callback(value));
  return await Promise.all(dataList);
};

logResult = (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
};

(async () => {
  console.log("Start");
  const randomDataList = await generateData();
  const heightInFeet = await processData(randomDataList, convertToFeet);
  for (let i = 0; i < randomDataList.length; i++) {
    logResult(randomDataList[i], heightInFeet[i]);
  }
  console.log("Finish");
})();

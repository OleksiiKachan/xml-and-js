const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const generateRandomNumber = () => Math.floor(Math.random() * 40);

const generateData = async () => {
  await timeout(1000);
  const data = Array.from({ length: 20 }, generateRandomNumber);
  return data;
};

const convertToFeet = async (meters) => {
  await timeout(3500);
  const feet = meters * 3.2808;
  return feet;
};


const processData = async (data) => {
  const result = await Promise.all(data.map(async (value) => {
    return convertToFeet(value);
  }));
  return result;
};

const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

const main = async () => {
  console.log("Start");
  const data = await generateData();
  const processedData = await processData(data);
  processedData.forEach((feet, i) => logResult(data[i], feet));
  console.log("Finish");
};

main();

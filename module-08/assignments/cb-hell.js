const timeout = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

const generateRandomNumber = () => Math.floor(Math.random() * 40);

const generateData = async () => {
  await timeout(1000);
  return Array.from({ length: 20 }, generateRandomNumber);
};

const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  await timeout(1000);
  return feet;
};

const processData = async (data) => {
  for (let i = 0; i < data.length; i++) {
    const convertedFeet = await convertToFeet(data[i]);
    console.log(convertedFeet);
  }
};

const logResult = (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
};

const main = async () => {
  console.log("Start");
  const data = await generateData();
  await processData(data);
  console.log("Finish");
};

main();

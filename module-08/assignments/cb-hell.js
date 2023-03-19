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
    return value;
  }));
  return result;
};

const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

const main = async () => {
  console.log("Start");
  let counter = 0;
  const data = await generateData();
  await Promise.all(data.map(async (value) => {
    const result = await convertToFeet(value);
    logResult(value, result);
    counter++;
    if (counter === data.length) {
      console.log("Finish");
    }
  }));
}

main();

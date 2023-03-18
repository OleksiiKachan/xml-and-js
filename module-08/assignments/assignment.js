// Name: wenhao fang
// ID: n01555914

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateRandomNumber = () => Math.floor(Math.random() * 40);

const generateData = async () => {
  await timeout(1000);
  const data = await Array.from({ length: 20 }, generateRandomNumber);
  return data;
};

const convertToFeet = async (meters) => {
  await timeout(3500);
  return meters * 3.2808;
};

const processData = async (data) => {
  const results = await Promise.all(data.map(convertToFeet));
  return results;
};

const logResult = (meters, feet) =>
  console.log(`Converted ${meters}m to ${feet}ft`);

const main = async () => {
  console.log("Start");

  const meters = await generateData(); // without wait, meter is pending
  const feet = await processData(meters); // without wait, feet is pending

  meters.forEach((meter, index) => {
    logResult(meter, feet[index]);
  });
  
  console.log("Finish");
};

main();

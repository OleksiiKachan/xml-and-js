const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const generateRandomNumber = () => Math.floor(Math.random() * 40);
const generateData = async () => {
  await timeout(1000);
  return Array.from({ length: 20 }, generateRandomNumber);
};
const convertToFeet = (meters) =>
  timeout(3500).then(() => meters * 3.2808);
const processData = async (data) => {
  for (const value of data) {
    const feet = await convertToFeet(value);
    logResult(value, feet);
  }
};
const logResult = (meters, feet) =>
  console.log(`Converted ${meters}m to ${feet}ft`);
async function main() {
  console.log("Start");
  const data = await generateData();
  await processData(data);
  console.log("Finish");
}
main();

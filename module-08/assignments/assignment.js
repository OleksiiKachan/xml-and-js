const timeout = async (ms) => {
	return setTimeout(() => ms);
};

const generateRandomNumber = (()=>Math.floor(Math.random() * 40));

const generateData = async () => {
	await timeout(1000); //generateData uses timeout function to wait for 1 sec 
	return processData(Array.from({ length: 20 }, generateRandomNumber));
};
const convertToFeet = async (meters) => {
	await timeout(3500); //waits for 3.5 secs using timeout function
	return logResult(meters, meters * 3.2808); //1 meter = 3.2808 feet
};
const processData = async (data) => {
  data.map(async (value) => {
    return convertToFeet(value);
  });
}
const logResult = async (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

async function main() {
  console.log("Start");
  await generateData();
  console.log("Finish");
}
main();
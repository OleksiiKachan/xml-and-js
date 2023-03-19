//Name: B.RamaKrishna Likith
//Humber ID: N01553398

const wait = async (ms) => {
	return setTimeout(() => ms);
};

const randomNumber = (
	()=>Math.floor(Math.random() * 40)
);


const Data = async () => {
	await wait(1000);
	return processData(Array.from({ length: 20 }, randomNumber));
};

const convertToFeet = async (meters) => {
	await wait(3500);
	return logResult(meters, meters * 3.2808);
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
  console.log("Begin");
  await Data();
  console.log("End");
}

main();
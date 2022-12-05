/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

const generateRandomNumber = async () => {
  await timeout(500);
  return Math.floor(Math.random() * 40);
};

const generateData = async () => {
  await timeout(1000);
  const data = await Promise.all(
    Array.from({ length: 20 }).map(generateRandomNumber)
  );
  return data;
};

const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  await timeout(3500);
  return feet;
};

const processData = async (data) => {
  const result = await Promise.all(
    data.map(async (value) => ({
      parsed: await convertToFeet(value),
      original: value,
    }))
  );

  return result;
};

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

const main = async () => {
  console.log("Start");
  const data = await generateData();
  const parsed = await processData(data);

  parsed.map(({ original, parsed }) => logResult(original, parsed));

  generateData()
    .then((data) => processData(data))
    .then((data) =>
      data.map(({ original, parsed }) => logResult(original, parsed))
    );

  console.log("Finish");
};

main();

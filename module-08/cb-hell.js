/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms)  =>  new Promise((resolve) => {
    setTimeout(() =>  {
      resolve();
    }, ms);
  });

const generateRandomNumber = () =>  Math.floor(Math.random() * 40);

const generateData = async () =>  {
  await timeout(1000)
  return Array.from({ length: 20 }, generateRandomNumber);
}

const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  await timeout(3500);
  return feet
}

const  processData = (data, callback) =>  {
  data.map((value) =>  {
    callback(value);
  });
}

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

const  main =async () =>  {
  console.log("Start");

  const data =  await generateData();
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const result = await convertToFeet(element);
    logResult(element, result);
  }
  // generateData(function (data) {
  //   processData(data, function (value) {
  //     convertToFeet(value, function (result) {
  //       logResult(value, result);
  //     });
  //   });
  // });
  console.log("Finish");
}

main();

const timeout = (ms) => new Promise(resolve => setTimeout(() => {
      resolve();
    }, ms));

const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 40);
}

const generateData = async() =>{
  await timeout(1000)
    return Array.from({ length: 20 }, generateRandomNumber);
}

//generateData((data) => console.log(data));

const convertToFeet = async (meters) => {
  const feet = meters * 3.2808;
  await timeout(3500)
  return feet
}

const processData = async (data) => {
  return await Promise.all( data.map(async value => {
     await convertToFeet(value);
  }));
}



const logResult = (meters,feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}


const main = async() =>{
  console.log("Start");
  try{
    const data = await generateData();
    const feet = await Promise.all(data.map(convertToFeet));
    data.forEach((value, index) => logResult(value, feet[index]));
  }
  catch(error){
    console.log(error);
  }
  console.log("Finish");
}

main();
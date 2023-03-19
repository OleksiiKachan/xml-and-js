// Assignment 8
//Garima Wadhwa n01552997


const timeout = async (ms) => {return setTimeout(() => ms);};
  
const generateRandomNumber = () => {return Math.floor(Math.random() * 40);};
 
// Here with timeout function will wait for 1 sec 
const generateData = async () => {await timeout(1000);
//will provide the array of 20 random num
return  processData(Array.from({ length: 20 }, generateRandomNumber));};
  
const convertToFeet = async (meters) => { const feet = meters * 3.2808;
//wait for 3.5 sec before logResult
await timeout(3500); 
return logResult(meters, feet);};
  
const processData = async (data) => {data.map(async (value) => {
return convertToFeet(value); });};
  
const logResult = async (meters, feet) => {console.log(`Converted ${meters}m to ${feet}ft`);};
  
const main = async () => 
{console.log("Start"); await generateData(); console.log("Finish");};
  
main();
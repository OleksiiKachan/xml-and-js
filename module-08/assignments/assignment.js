// Module_8 Assignment
// Vimal Radadiya
const timeout = (ms) => {
    return new Promise((resolve)=> {
      setTimeout( ()=> {
      resolve();
      }, ms);
    });
  };


const generateRandomNumber = () => (
    Math.floor(Math.random() * 40)
    );

const generateData = async () => {
        await timeout(1000);
        const data = Array.from({ length: 20 }, generateRandomNumber);
        return data;
      };


const processData = async (data, callback) => {
        for (const value of data) {
          await callback(value);
        }
      };

const convertToFeet = async (meters) => {
        await timeout(3500);
        const feet = meters * 3.2808;
        return feet;
      };

const logResult = (meters, feet) => {
        console.log(`Converted ${meters}m to ${feet}ft`);
    };

const main = async () => {
        console.log("Start");
        const data = await generateData();
        await processData(data, async (value) => {
        const result = await convertToFeet(value);
          logResult(value, result);
        });
        console.log("Finish");
 };

 main()


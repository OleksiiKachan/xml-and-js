/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
}

const generateData = async () => {
    await timeout(1000);
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return data;
}

const convertToFeet = async (meters) => {
    const feet = meters * 3.2808;
    await timeout(3500);
    return feet;
}

const processData = async (data, callback) => {
    const lst = data.map(async (value) => {
        return await callback(value);
    });
    return await Promise.all(lst);
}

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
}

//   function main() {
//     console.log("Start");
//     generateData(function (data) {
//       processData(data, function (value) {
//         convertToFeet(value, function (result) {
//           logResult(value, result);
//         });
//       });
//     });
//     console.log("Finish");
//   }

// main();

(async () => {
    console.log("Start");
    
    const meterList = await generateData();
    // console.log(meterList);

    const feetList = await processData(meterList, convertToFeet);
    // console.log(feetList);

    for (let i = 0; i < meterList.length; i++) {
        logResult(meterList[i], feetList[i]);       
    }

    console.log("Finish");
})();

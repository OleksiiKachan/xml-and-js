/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

const generateRandomNumber = () =>
    Math.floor(Math.random() * 40)

const generateData = () =>
    timeout(1000).then(() => Array.from({ length: 20 }, generateRandomNumber))

const convertToFeet = (meters) =>
    timeout(3500).then(() => meters * 3.2008);

const processData = async (data, conversion) => {
    const List = data.map(async (value) => await conversion(value));
    return await Promise.all(List);
};

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
};

const main = async () => {
    console.log("Start");
    const randomDataList = await generateData();
    const heightInFeet = await processData(randomDataList, convertToFeet);
    for (let i = 0; i < randomDataList.length; i++) {
        logResult(randomDataList[i], heightInFeet[i]);
    }
    console.log("Finish");
};

main();


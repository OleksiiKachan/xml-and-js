const timeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
};

const generateData = async () => {
    await timeout(2000);
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return data;
};

const convertToFeet = async (meters) => {
    const feet = meters * 3.2808;
    await timeout(2000);
    return feet;
};

const processData = async (data, callback) => {
    const lst = data.map(async (value) => {
        return await callback(value);
    });
    return await Promise.all(lst);
}

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
};


(async () => {
    console.log("Start");

    const meters = await generateData();

    const feets = await processData(meters, convertToFeet);

    for (let i = 0; i < meters.length; i++) {
        logResult(meters[i], feets[i]);       
    }

    console.log("Finish");
})();
const TimeOut = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const GenRandomNum = () => {
    return Math.floor(Math.random() * 40);
};

const GenData = async () => {
    await TimeOut(2000);
    const Data = Array.from({ length: 20 }, GenRandomNum);
    return Data;
};

const ConToFeet = async (Meters) => {
    const Feet = Meters * 3.2808;
    await TimeOut(2000);
    return Feet;
};

const ProData = async (Data, callback) => {
    const First = Data.map(async (Value) => {
        return await callback(Value);
    });
    return await Promise.all(First);
}

const Result = (Meters, Feet) => {
    console.log(`Converted ${Meters}m to ${Feet}ft`);
};


(async () => {
    console.log("Start");


    const Meters = await GenData();

    const Feets = await ProData(Meters, ConToFeet);

    for (let i = 0; i < Meters.length; i++) {
        Result(Meters[i], Feets[i]);       
    }

    console.log("Finish");
})();
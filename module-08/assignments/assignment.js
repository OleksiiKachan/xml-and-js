const timeout = (ms) => new Promise ((resolve) => setTimeout(resolve, ms));

const generateRandomNumber = () => Math.floor(Math.random()*40);

const generateData = async() => {
    await timeout(1000); 
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return(data); 
}

const convertToFeet = async(meters) =>{
    const feet = await meters * 3.2808;
    await timeout(3500);
    return logResult(meters, feet);
}

const processData = async(data)=> await Promise.all(data.map((value => convertToFeet(value))));

const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

const main = async() => {
    console.log("Start");
    const data = await generateData();
    await processData(data);
    console.log("Finish");
}

main();
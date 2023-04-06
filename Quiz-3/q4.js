const myFunction = (...args) => {
    if (args.length === 0) {
        return Promise.reject(new Error('Problem! No arguments have been passed!'));
    } else {
        return Promise.resolve(args);
    }   
};

async function mainFunction() {
    try {
        const res1 = await myFunction(99, 90, 109);
        console.log(res1);
        const res2 = await myFunction('value', 17, {});
        console.log(res2); 
        const res3 = await myFunction() ;
        console.log(res3); //will throw error
    } catch (error) {
        console.error(error);
    }
}

mainFunction();
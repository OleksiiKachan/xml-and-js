const returnPromise = (...args) => {
    const nargs = args.length;
    return new Promise((resolve, reject) => {
        if (nargs > 0){
            resolve(args);
        } else{
            reject('No arguments found');
        }
    
    });
}

const main = () => {
    returnPromise().catch(error => console.log(error));
    returnPromise(1,2,3).then(res => console.log(res));
    returnPromise('Hanish',1,2).then(res => console.log(res));
}

main();
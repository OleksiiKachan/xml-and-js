function returnPromise(...args) {
    const number = args.length;
    return new Promise(function(resolve, reject) {
        if (number > 0){
            resolve(args);
        } else{
            reject('no arguments passed');
        }
    
    });
}

console.log(returnPromise(8,5,4))
console.log(returnPromise())
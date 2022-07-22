function returnPromise(...args) {
    const N = args.length;
    return new Promise(function(resolve, reject) {
        if (N > 0){
            resolve(args);
        } else{
            reject('Number of Arguments should not be less than 1 or 0');
        }
    });
}

console.log(returnPromise('123', 20, {}))
console.log(returnPromise( 6, 0, 6))
console.log(returnPromise())
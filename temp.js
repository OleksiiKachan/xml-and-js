function myfunction(...args) {
    const obj = args.length;
    return new Promise(function(resolve, reject) {
        if (obj > 0){
            resolve(args);
        } else{
            reject('No arguments were passed');
        }
    
    });
}

console.log(myfunction('Hello',2,'The World'));
console.log(myfunction());
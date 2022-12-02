async function func(...args) {
    const N = args.length;
    try {
        try {
            return await new Promise(function (resolve, reject) {
                if (N > 0) {
                    resolve(args);
                } else {
                    reject('No arguments were passed');
                }

            });
        } catch (error) {
            return 'No arguments passed';
        }
    } catch (error_1) {
        return console.log(error_1.message);
    }
}
const main=async()=>{
 const x=await func(1,2,3,4,5,6,7,"8");
 const y=await func('value',15,{});
 const z=await func(); 
 console.log(x);
 console.log(y);
 console.log(z);
}
main();
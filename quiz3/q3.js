/**
 * n01551519
 * Rutwa Dave
 */

const fn = (...args) => {
    return new Promise((resolve, reject) => {
        if (args.length 
            === 0) {
            reject("No arguements passed");
        } else {
            resolve(args);
        }
    });
}


//returns 1,2,3
fn(1, 2, 3)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

//returns passed arguments value, 15 and braces
fn("value", 15, {})
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

//throws error
fn()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
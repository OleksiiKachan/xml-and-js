
// const a = `value`;
// const b = 2;
// const c = {};

// var fun = Promise.allSettled([a, b, c]).then(result => {
//     console.log({result});
// }).catch(error => {
//     console.log('Error!');
// });

const fs = require("fs");
let value = 1;

const check = (value) =>
  new Promise((resolve, reject) => {
    if(value != null)
    {
    resolve(value);
        console.log(value);
    }
    else
    reject ("Error");

    // fs.exists(value, (exists) => {
    //   if (exists) {
    //     resolve(filename);
    //   } else {
    //     reject("404: file not found");
    //   }
    });

    const read = (value) =>
  check(value).then(checkIfFile).then(readFile);

safeReadFile(filename).then(console.log).catch(console.error);



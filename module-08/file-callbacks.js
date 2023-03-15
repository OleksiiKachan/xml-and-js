const fs = require("fs");
let filename = `${__dirname}/books.json`;

const checkIfExists = (filename) => 
  new Promise((resolve, reject) =>{
    fs.exists(filename,(exists) => {
    if (exists){
      resolve (filename);
    }
    else{
      reject('404: file not found');
    }
  });
});

const checkIfFile = (filename) =>
  new Promise((resolve,reject) =>{
    fs.stat(filename, (err, stats) => {
      if (exists){
        resolve(filename);
      }
      else{
        reject("This location contains not a file");
      }
    });
  });



fs.exists(filename, (exists) => {
  if (exists) {
    fs.stat(filename, (err, stats) => {
      if (err) {
        throw err;
      }
      if (stats.isFile()) {
        fs.readFile(filename, null, (err, data) => {
          if (err) {
            throw err;
          }
          console.log(JSON.parse(data));
        });
      } else {
        throw new Error("This location contains not a file");
      }
    });
  } else {
    throw new Error("404: file not found");
  }
});


const main = async() =>{
  try{
  await checkIfExists(filename);
  await checkIfFile(filename);
  const data = await readFile(filename);
  console.log(data);
  }
  catch(error){
    console.error(error);
  }
};

main().then(() => {
  console.log('after file')
});

const fs = require("fs");
let filename = `${__dirname}/books.json`;

const checkExistence = (filename) =>
  new Promise((resolve, reject) => {
    fs.exists(filename, (exist) => {
      if (exist) {
        resolve(filename);
      } else {
        reject("Not exist!");
      }
    });
  });

// checkExistence(filename)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const checkType = (filename) =>
  new Promise((resolve, reject) => {
    fs.stat(filename, (error, stats) => {
      if (error) {
        reject(error);
      } else {
        resolve(filename);
      }
    });
  });

// checkExistence(filename)
//   .then((data) => checkType(data))
//   .catch((err) => {
//     console.log("type:" + err);
//   });

const readJson = (filename) =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });


checkExistence(filename)
  .then((data) => checkType(data))
  .then((data) => readJson(data))
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


const main = async () => {
  try {
    await checkExistence(filename);
    await checkType(filename);

    const data = await readJson(filename);
    console.log(data);
  } catch (err) {
    console.error(error);
  }
};

main();
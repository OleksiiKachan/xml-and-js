//what is stats in javascript?
//calling package required for I/O operations
const fileReader = require("fs");
const { resolve } = require("path");
let jsonFile = `${__dirname}/books.json`;

//first checking existence of the file in system using the 'exists' method
const checkFileExistence = (jsonFile) => new Promise ((resolve, reject) => {
    /*
    'exists' methods require two arguments:
        1. 'jasonFile' - which is the file we want to parse the data for
        2. '(exists)' - which returns a boolean value of the existence of the file var given as argument
            If it is true, wewill passthe file variable to resolve
    */
    fileReader.exists(jsonFile, (exists) => {
        if(exists) { 
            resolve(jsonFile);
        }
        else {
            reject("FILE NOT FOUND");
        }
    });
});

//Second, we check the status and existence of the file using the 'stat' method
const checkFileStatus = (jsonFile) => new Promise ((resolve, reject) => {
    fileReader.stat(jsonFile, (err, stats) => {
        if (err || null) {
            reject(err || "THIS LOCATION HAS NO GIVEN FILE")
        }
        else {
            resolve(jsonFile);
        }
    });
});
var arr = ["Smith", "John", "Sloan", 0, 1];

var result = arr.filter((row) => row === "Smith"); //[ 'Smith' ]
var result = arr.filter((row) => row == "Smith"); //[ 'Smith' ]
var result = arr.filter((row) => true); //[ 'Smith', 'John', 'Sloan', 0, 1 ]
// var result = arr.filter((row) => false); //
var result = arr.filter((row) => Boolean(row)); //

console.log(result);

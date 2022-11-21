const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log(`before`);
wait(2000).then(() => {
  console.log("async function");
  console.log(`after`);
});node




// console.log(`before`);
// setTimeout(() => {
//   console.log("async function");
// }, 2000);
// console.log(`after`);


// const wait = (ms) => new Promise  *Burada içine ms alacak ve 
                                    //* new Promise döndürecek arrow function

//new Promise((resolve) => function )  //Promise resolve dönüyor ama settimeout fonksiyonu ile

// new Promise((resolve) => setTimeout(resolve,ms));

//sonuçta const wait (ms) sonra resolve döndürüyor.

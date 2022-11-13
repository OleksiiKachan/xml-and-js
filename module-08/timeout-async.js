const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log(`before`);
wait(2000).then(() => {
  console.log("async function");
  console.log(`after`);
});


console.log(`before`);
setTimeout(()=>
console.log(`sysnc`),2000);
console.log(`after`);

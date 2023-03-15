// console.log("before");
// setTimeout(() => console.log("after timeout"), 3000); //延迟执行
// console.log("after");

// // before
// // after
// // after timeout

// // promise
// const promise = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("after timeout");
//       resolve();
//     }, ms);
//   });

// console.log("before");
// promise(3000).then(() => {
//   console.log("after ");
// });
// // before
// // after timeout
// // after

//promise02

const executor = (resolve, reject) => {
  //   const flag = true;
  const flag = false;

  if (flag) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
};

const promise = new Promise(executor);

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error)); //reject

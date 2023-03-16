// // // console.log(`before`)
// // // setTimeout(() => {
// // //     console.log(`after timeout`)
// // // }, 1500)
// // // console.log(`after`)

// // const timeout = () => new Promise((resolve) =>{
// //     setTimeout(() => {
// //         console.log(`after timeout`)
// //     }, 1500)
// // });

// // console.log(`before`)
// // timeout().then(()=>{
// //     console.log(`after`);
// // });
// // console.log(`after`)

// // const timeout = () => new Promise((resolve) =>{
// //     setTimeout(() => {
// //         console.log(`after timeout`)
// //     }, 1500)
// // });

// // console.log(`before`)
// // timeout().then(()=>{
// //     console.log(`after`);
// // });
// // console.log(`after`)


// ///

// const timeout = (ms = 1500) => new Promise(resolve => setTimeout(resolve,ms));


// //Inc Function

// function inc(a) {
//     return a + 1;
//   }


//   const inc = (a) => {
//     return new Promise((resolve) => {
//       resolve(a + 1);
//     });
//   };
  
//   inc(5).then((output) => {
//     console.log("inc(5) =", output);
//   });
  
//   // Sum Function

//   const sum = function (a, b) {
//     return a + b;
//   };
//   console.log("sum(1, 3) =", sum(1, 3));

//   const sum = (a,b) => {
//     return new Promise((resolve) =>{
//         resolve(a+b);
//     });
// };
//     sum(1,3).then((result) => {
//         console.log("sum(1, 3) =", result);
//     });

// // Average

// async function avg (a,b) {
//     return timeout().then(() => sum(a,b)).then(s => s/2);
// }
// avg(8,6).then(data => console.log("avg(8, 6) =", data));


// // Max Function

// async function max(a, b){

//     return timeout().then(() => a > b ? a : b);
//     }
//     max(8,6).then(data => console.log ("max(8,6) =", data));


// const obj = {
//     name: "Marcus Aurelius",
//     split(sep = " ") {
//       return timeout().then(() => this.name.split(sep));
//     },
//   };
  
//   class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     static async of(name) {
//         return timeout().then(()=>new Person(name));
//       }
  
//     async split(sep = " ") {
//       return timeout().then(() => this.name.split(sep));
//     }
//   }
  
//   const person = Person.of("Marcus Aurelius");


// obj.split().then((data) => console.log("obj.split() =", data));
// person.then((person) => person.split()).then((data) => console.log("person.split() =", data));
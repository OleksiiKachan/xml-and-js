// function inc(a) {
//     return a + 1;
//   }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {inc(value);},
//     function(error) {inc(error);}
//   );

// function inc(a) {
//     return new Promise(function(resolve, reject) {
//       try {
//         resolve(a + 1);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
  
//   inc(5)
//     .then(function(result) {
//       console.log("inc(5) =", result);
//     })
//     .catch(function(error) {
//       console.error(error);
//     });
  
const timeout = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

function inc(a) {
  return timeout().then(() => a + 1);
}

const sum = function (a, b) {
  return timeout().then(() => a + b);
};

const max = (a, b) => timeout().then(() => (a > b ? a : b));

const avg = (a, b) => sum(a, b).then((sum) => sum / 2);

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return timeout().then(() => this.name.split(sep));
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return timeout().then(() => new Person(name));
  }

  split(sep = " ") {
    return timeout().then(() => this.name.split(sep));
  }
}

inc(5)
  .then((v) => console.log("inc(5) =", v))
  .then(() => sum(1, 3))
  .then((v) => console.log("sum(1, 3) =", v))
  .then(() => max(8, 6))
  .then((v) => console.log("max(8, 6) =", v))
  .then(() => avg(8, 6))
  .then((v) => console.log("avg(8, 6) =", v))
  .then(() => obj.split())
  .then((v) => console.log("obj.split() =", v))
  .then(() => Person.of("Marcus Aurelius"))
  .then((p) => p.split())
  .then((v) => console.log("person.split() =", v));
  
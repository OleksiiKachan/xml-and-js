const wait = (ms=1000) => new Promise((resolve) => setTimeout(resolve, ms));

// const inc = sync(a) => {
//   await wait();
//   return a+1;
// }

function inc(a) {
  return a + 1;
}
//Rewriting increment using promises
const inc2 = (a) => {
  return new Promise((resolve) => wait().then(() => resolve(a+1)));
}
const sum = function (a, b) {
  return a + b;
};
//Rewriting Sum using promises
const sum2 = (a,b) => {
  return new Promise((resolve) => wait().then(() => resolve(a+b)));
}
const max = (a, b) => (a > b ? a : b);

//Rewriting MAximum using promises
const max2 = (a,b) => {
  return new Promise((resolve) => wait().then(() => resolve(a > b ? a : b)));
}
const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};
//Rewriting average using promises
const avg2 = (a,b) => {
  return new Promise((resolve) => wait()
    .then(() => sum2(a,b))
     .then((sum2) => resolve(sum2/2))
  );
}

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return this.name.split(sep);
  },
};
//Rewriting Obj using promises
const obj2 = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    //return this.name.split(sep);
    return new Promise((resolve) => wait().then(() => resolve(this.name.split(sep))))
  },
};
class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);

    return new Promise((resolve) => {
      wait().then(() => resolve(new Person(name)))
    })
  }

  split(sep = " ") {

    return this.name.split(sep);
    
    return new Promise((resolve) => wait().then(() => resolve(this.name.split(sep))));
  }
}

const person = Person.of("Marcus Aurelius");
(async () => {

  console.log("inc(5) =", inc(5));
  console.log("sum(1, 3) =", sum(1, 3));
  console.log("max(8, 6) =", max(8, 6));
  console.log("avg(8, 6) =", avg(8, 6));
  console.log("obj.split() =", obj.split());
  // console.log("person.split() =", person.split());

  console.log("inc2(5) =", await inc2(5));
  console.log("sum(4, 3) =", await sum2(4, 3));
  console.log("max2(9, 3) =", await max2(9, 3));
  console.log("avg2(10,2) =", await avg2(10, 2));
  console.log("obj2.split() =", await obj2.split());
  console.log("person.split() =", await person.split());

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());
})();

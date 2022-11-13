const wait = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
const inc = (a) =>
  new Promise((resolve) => {
    wait().then(() => resolve(a + 1));
  });

const sum = (a, b) => {
  return new Promise((resolve) => {
    resolve(a + b);
  });
};

const max = (a, b) =>
  new Promise((resolve) => {
    resolve(a > b ? a : b);
  });

// const avg = (a, b) => {
//   return new Promise((resolve) => {
//     const s = sum(a, b);
//     resolve(s / 2);
//   });
// };
const avg = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve((a + b) / 2);
  });
};

const objPr = (obj) => {
  return new Promise((resolve, reject) => {
    sep = " ";
    resolve(obj.name.split(sep));
  });
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return this.name.split(sep);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const personPr = (person) => {
  return new Promise((resolve, reject) => {
    resolve(person.name.split(sep));
  });
};
const person = Person.of("Marcus Aurelius");
inc(5).then((value) => console.log(`${value}`));
sum(5, 10).then((value) => console.log(`Sum is ${value}`));
max(10, 15).then((value) => console.log(`Maximum is ${value}`));
avg(10, 15).then((value) => console.log(`Avg is ${value}`));
objPr(obj).then((res) => console.log("objPr(obj) = " + res));
personPr(person).then((res) => console.log("personPr(person) = " + res));
const main = async () => {
  console.log("inc(10) =", await inc(10));
  // console.log("sum(1, 3) =", await sum(1, 3));
};

// console.log("inc(5) =", inc(5));
// console.log("sum(1, 3) =", sum(1, 3));
// console.log("max(8, 6) =", max(8, 6));
// console.log("avg(8, 6) =", avg(8, 6));
// console.log("obj.split() =", obj.split());
// console.log("person.split() =", person.split());
main();

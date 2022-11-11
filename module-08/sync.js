const { resolve } = require("path");

function inc(a) {
  return a + 1;
}

const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const sum = async(a, b) =>{
  //await wait();
  return new Promise((resolve) => wait().then(() => resolve(a + b)));
}
const max = async(a, b) => {
      return new Promise((resolve) => wait().then(() => resolve(a > b ? a : b)));
}

const avg = async(a, b) => {
  return new Promise((resolve) => wait().then(() => resolve(sum(a, b).then((value) => `${value}`) / 2)));
};

const obj = {
  name : "Marcus Aurelius",
  split(sep = " ") {
    //await wait();
    return new Promise((resolve) => wait().then(() => resolve(this.name.split(sep))));
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    //return new Person(name);
    return new Promise((resolve) => wait().then(() => resolve(name)));
  }

  async split(sep = " ") {
    //return this.name.split(sep);
    await wait();
    return new Promise((resolve) => wait().then(() => resolve(this.name.split(sep))));
  }
}

(async() => { const person = await Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
sum(1, 3).then((value) => console.log(`sum(1, 3) = ${value}`));
max(8, 6).then((value) => console.log(`max(8, 6) = ${value}`));
avg(8, 6).then((value) => console.log(`avg(8, 6) = ${value}`));
obj.split().then((value) => console.log(`obj.split() = ${value}`));
person.split().then((value) => console.log(`person.split() = ${value}`));
})();
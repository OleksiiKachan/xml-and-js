const { resolve } = require("path");

const timeout = (ms=1) => 
new Promise((resolve) => {
  setTimeout(function () {
    resolve();
  }, ms);
});

const inc = async (a) => {
  return await timeout().then(() => a + 1);
}

const sum = async (a, b) => {
  return await timeout().then(() => a + b);
};

const max = async (a, b) => {
  return await timeout().then(() => a > b ? a : b);
};

const avg = async (a, b) => {
  return await timeout().then(async () => await sum(a, b) / 2);
};

const obj = {
  name: "Marcus Aurelius",
  async split(sep = " ") {
    return await timeout().then(() => this.name.split(sep));
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  async split(sep = " ") {
    return await timeout().then(() => this.name.split(sep));
  }
}

const person = Person.of("Marcus Aurelius");

(async () => {
console.log("inc(5) =", await inc(5));
console.log("sum(1, 3) =", await sum(1, 3));
console.log("max(8, 6) =", await max(8, 6));
console.log("avg(6, 3) =", await avg(6, 3));
console.log("obj.split() =", await obj.split());
console.log("person.split() =", await person.split());
})();
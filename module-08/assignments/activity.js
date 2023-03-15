const timeout = (ms = 1500) => new Promise((resolve) => setTimeout(resolve, ms));

function inc(a) {
  return timeout().then(() => a + 1);
}

const sum = function (a, b) {
  return timeout().then(() => a + b);
};

const max = (a, b) => {
  return timeout().then(() => a > b ? a : b);
};

const avg = (a, b) => {
  return timeout().then(() => sum(a, b)).then((s) => s / 2);
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return timeout().then(() => this.name.split(sep))
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


const person = new Person("Marcus Aurelius");

//Sequential Promises
inc(5)
.then((result) => console.log("inc(5) =", result))
.then(() => sum(1, 3))
.then((result) => console.log("sum(1, 3) =", result))
.then(() => max(8, 6))
.then((result) => console.log("max(8, 6) =", result))
.then(() => avg(8, 6))
.then((result) => console.log("avg(8, 6) =", result))
.then(() => obj.split())
.then((result) => console.log("obj.split() =", result))
.then(() => person.split())
.then((result) => console.log("person.split() =", result))

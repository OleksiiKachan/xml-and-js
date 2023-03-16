const timeout = (ms = 1500) => new Promise((resolve) => setTimeout(resolve, ms));

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

inc(7).then((j) => console.log("inc(7) =", j))
  .then(() => sum(5, 6))
  .then((j) => console.log("sum(5, 6) =", j))
  .then(() => max(10, 100))
  .then((j) => console.log("max(10, 100) =", j))
  .then(() => avg(7, 7))
  .then((j) => console.log("avg(7, 7) =", j))
  .then(() => obj.split())
  .then((j) => console.log("obj.split() =", j))
  .then(() => Person.of("Marcus Aurelius"))
  .then((p) => p.split())
  .then((j) => console.log("person.split() =", j));
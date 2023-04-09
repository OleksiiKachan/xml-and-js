const timeout = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

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
  .then((k) => console.log("inc(5) =", k))
  .then(() => sum(1, 3))
  .then((k) => console.log("sum(1, 3) =", k))
  .then(() => max(8, 6))
  .then((k) => console.log("max(8, 6) =", k))
  .then(() => avg(8, 6))
  .then((k) => console.log("avg(8, 6) =", k))
  .then(() => obj.split())
  .then((k) => console.log("obj.split() =", k))
  .then(() => Person.of("Marcus Aurelius"))
  .then((p) => p.split())
  .then((k) => console.log("person.split() =", k));
  
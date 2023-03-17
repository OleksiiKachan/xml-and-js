const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function inc(a) {
  return wait().then(() => a + 1);
}

const sum = function (a, b) {
  return wait().then(() => a + b);
};

const max = (a, b) => {
  return wait().then(() => a > b ? a : b);
}

const avg = (a, b) => {
  return wait().then(()=> (a + b)/2)
  // const s = sum(a, b);
  // return s / 2;
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return wait().then(() => this.name.split(sep));
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return wait().then(() => new Person(name));
  }

  split(sep = " ") {
    return wait().then(() => this.name.split(sep));
  }
}

const person = Person.of("Marcus Aurelius");

// console.log("inc(5) =", inc(5));
// console.log("sum(1, 3) =", sum(1, 3));
// console.log("max(8, 6) =", max(8, 6));
// console.log("avg(8, 6) =", avg(8, 6));
// console.log("obj.split() =", obj.split());
// console.log("person.split() =", person.split());

inc(5)
  .then(result => console.log("inc(5) = ", result))
  .then(() => sum(1, 3)
  .then(result => console.log("sum(1, 3) = ", result)))
  .then(() => max(8, 6)
  .then(result => console.log("max(8, 6) =", result)))
  .then(() => avg(8, 6)
  .then(result => console.log("avg(8, 6) = ", result)))
  .then(() => obj.split()
  .then(result => console.log("obj.split() = ", result)))
  .then(() => Person.of("Marcus Aurelius")
  .then(person => person.split())
  .then(result => console.log("person.split() =", result)));
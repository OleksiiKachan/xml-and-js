const timeout = (ms) => 
  new Promise((resolve) => setTimeout(resolve, ms));


function inc(a) {
  await timeout();
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};

const obj = {
  name: "Marcus Aurelius",
  async split(sep = " ") {   //asynchous
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

( async () => {
const person = await Person.of("Marcus Aurelius");

console.log("inc(5) =", await inc(5));
console.log("sum(1, 3) =", await sum(1, 3));
console.log("max(8, 6) =", await max(8, 6));
console.log("avg(8, 6) =", await avg(8, 6));
console.log("obj.split() =", await obj.split());
console.log("person.split() =",await  person.split());
})();
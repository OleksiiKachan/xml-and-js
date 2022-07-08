const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));

const inc = (a) => new Promise((resolve) => resolve(a + 1));

const sum = (a, b) => new Promise((resolve) => resolve(a + b));

const max = (a, b) => new Promise((resolve) => resolve(a > b ? a : b));

const avg = (a, b) => new Promise((resolve) => resolve(sum(a, b) / 2));

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve) => resolve(this.name.split(sep)));
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
    return new Promise((resolve) => resolve(this.name.split(sep)));
  }
}

const person = Person.of("Marcus Aurelius");

inc(5)
  .then((data) => {
    console.log(data);
  })
  .then(wait)
  .then(sum(1, 3))
  .then((data) => {
    console.log(data);
  })
  .then(wait)
  .then(max(8, 6))
  .then((data) => {
    console.log(data);
  })
  .then(wait);

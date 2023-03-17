function inc(a) {
  return new Promise((resolve) => resolve(a + 1));
}

const sum = (a, b) => {
  return new Promise((resolve) => resolve(a + b));
};

const max = (a, b) => {
  return new Promise((resolve) => {
    if (a > b) {
      resolve(a);
    } else {
      resolve(b);
    }
  });
};

const avg = (a, b) => {
  return sum(a, b).then((s) => s / 2);
};

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

inc(5).then((result) => console.log("inc(5) =", result));
sum(1,3).then((result)=>console.log("sum(1,3)= ",result));
max(8,6).then((result)=>console.log("max(8,6)= ",result));
avg(8,6).then((result)=>console.log("avg(8,6)= ",result));
obj.split().then(result=>console.log("obj.split()= ", result))
person.split().then(result=>console.log("person.split()= ", result))

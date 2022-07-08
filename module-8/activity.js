inc = (a) => {
    return new Promise((resolve, reject) => {
      resolve(a + 1);
    });
  };
  
  sum = (a, b) => {
    return new Promise((resolve, reject) => {
      resolve(a + b);
    });
  };
  
  max = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a > b) {
        resolve(a);
      } else {
        resolve(b);
      }
    });
  };
  
  avg = (a, b) => {
    return new Promise((resolve, reject) => {
      sum(a, b).then((value) => resolve(value / 2));
    });
  };
  
  const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return new Promise((resolve, reject) => {
        return resolve(this.name.split(sep));
      });
    },
  };
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static of(name) {
      return new Person(name);
    }
  
    split = (sep = " ") => {
      return new Promise((resolve, reject) => {
        resolve(this.name.split(sep));
      });
    };
  }
  
const person = Person.of("Marcus Aurelius");


inc(5).then((value) => console.log("inc(5) =", value));
sum(1, 3).then((value) => console.log("sum(1, 3) =", value));
max(8, 6).then((value) => console.log("max(8, 6) =", value));
avg(8, 6).then((value) => console.log("avg(8, 6) =", value));
obj.split().then((value) => console.log("obj.split() =", value));
person.split().then((value) => console.log("person.split() =", value));
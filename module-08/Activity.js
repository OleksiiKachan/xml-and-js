function timeout(ms = 4000) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, ms);
    });
  }
  

   function inc(a) {
    return new Promise((resolve) => timeout().then(() => resolve(a+1)));
  }
  
  const sum =  function (a, b) {
    return new Promise((resolve) => timeout().then(() => resolve(a+b)));
  };
  
  const max = (a, b) => {
    return new Promise((resolve) => timeout().then(() => resolve(a > b ? a : b)));
  };
  
  const avg =  (a, b) => {
    return new Promise((resolve) => timeout().then(() => sum(a,b)).then((s) => resolve(s/2)));
  };
  
  const obj = {
    name: "Marcus Aurelius",
    async split(sep = " ") {
        return new Promise((resolve) => timeout().then(() => resolve(this.name.split(sep))));
    },
  };
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static of(name) {
      return new Promise((resolve) => timeout().then(() => resolve(new Person(name))));
    }
  
     split(sep = " ") {

      return new Promise((resolve) => timeout().then(() => resolve(this.name.split(sep))));
    }
  }
  
  const person = new Person("Marcus Aurelius");
  
  inc(5)
  .then((x) => console.log("inc(5) =", x))
  .then(() => sum(1, 3))
  .then((x) => console.log("sum(1, 3) =", x))
  .then(() => max(8, 6))
  .then((x) => console.log("max(8, 6) =", x))
  .then(() => avg(8, 6))
  .then((x) => console.log("avg(8, 6) =", x))
  .then(() => obj.split())
  .then((x) => console.log("obj.split() =", x))
  .then(() => Person.of("Marcus Aurelius"))
  .then((p) => p.split())
  .then((x) => console.log("person.split() =", x));
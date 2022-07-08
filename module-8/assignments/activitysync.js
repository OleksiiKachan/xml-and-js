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
  
  const main = async () => {
    Promise.all([inc(5), sum(1, 3), max(8, 6), avg(8, 6), obj.split(), person.split()])
    .then(values => {
      console.log("inc(5) =", values[0]);
      console.log("sum(1, 3) =", values[1]);
      console.log("max(8, 6) =", values[2]);
      console.log("avg(8, 6) =", values[3]);
      console.log("obj.split() =", values[4]);
      console.log("person.split() =", values[5]);
    });
    }

    main();
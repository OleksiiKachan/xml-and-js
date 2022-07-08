function inc(a) {
    return new Promise(resolve=>{resolve(a+1);})
  }
  
  const sum = function (a, b) {
    return new Promise(resolve=>{resolve(a+b);})
  };
  
  const max = (a, b) => {return new Promise(resolve=>{resolve(a > b ? a : b);})};
  
  const avg = async(a, b) => {
    const s = await sum(a, b);
    return new Promise(resolve=>{resolve(s/2);})
  };
  
  const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return new Promise(resolve=>{resolve(this.name.split(sep));})
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
      return new Promise(resolve=>{resolve(this.name.split(sep));})
    }
  }
  
  const person = Person.of("Marcus Aurelius");
  
  const main = async () => {
    console.log("inc(5) =", await inc(5));
    console.log("sum(1, 3) =", await sum(1, 3));
    console.log("max(8, 6) =", await max(8, 6));
    console.log("avg(8, 6) =", await avg(8, 6));
    console.log("obj.split() =", await obj.split());
    console.log("person.split() =", await person.split());
  };

  main();
  
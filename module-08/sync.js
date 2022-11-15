const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve,ms));
const inc = async (a) => {
    await wait();
    return a + 1;
  }
  
  const sum = async (a, b) => {
    await wait();
    return a + b;
  };
  
  const max = async (a, b) => {
    await wait();
    return (a > b ? a : b);
};
  
  const avg = async (a, b) => {
    await wait();
    const s = await sum(a, b);
    return (s / 2);
  };

  const obj = {
    name: "Marcus Aurelius",
    async split(sep = " ") {
        await wait();
      return this.name.split(sep);
    },
  };

  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static async of(name) {
        await wait();
      return new Person(name);
    }
  
    async split(sep = " ") {
        await wait();
      return this.name.split(sep);
    }
  }
  
 
  
  inc(5).then((value) => console.log(`inc(5) =  ${value}`));
  const main= async () => {
    const person = await Person.of("Marcus Aurelius");
    console.log("inc(5) =", await inc(5));
    console.log("sum(1, 3) =", await sum(1, 3));
    console.log("max(8, 6) =", await max(8, 6));
    console.log("avg(8, 6) =", await avg(8, 6));
    console.log("obj.split() =", await obj.split());
    console.log("person.split() =", await person.split());

  }


  main();

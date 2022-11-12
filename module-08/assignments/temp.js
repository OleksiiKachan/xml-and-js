function timeout(ms) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, ms);
    });
  }
  
  async function inc(a) {
    await timeout(2000);
    return a + 1;
  }
  
  async function sum(a, b) {
    await timeout(2000);
    return a + b;
  }

  async function max(a,b){
    await timeout(1000)
    return a > b ? a : b;
  }

  async function avg(a,b){
    await timeout(1000)
    const s = await sum(a, b);
    return s / 2;
  }

  const obj = {
    name: "Marcus Aurelius",
    async split(sep = " ") {
      await timeout(2000);
  
      return this.name.split(sep);
    },
  };
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static async of(name) {
      await timeout(2000);
  
      return new Person(name);
    }
  
    async split(sep = " ") {
      await timeout(2000);
  
      return this.name.split(sep);
    }
  }
  
  const person = new Person("Marcus Aurelius");
  
  (async () => {
    console.log("await inc(5) =", await inc(5));
    console.log("await sum(1, 3) =", await sum(1, 3));
    console.log("await max(8, 6) =", await max(8, 6));
    console.log("await avg(8, 6) =", await avg(8, 6));
    console.log("await obj.split() =", await obj.split());
    console.log("await person.split() =", await person.split());
  })();
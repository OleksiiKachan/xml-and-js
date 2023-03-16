    const timeout = (ms = 1500) => new Promise(resolve => setTimeout(resolve,ms));

    //Inc Function

    async function inc(a) {
        return timeout().then(() => a+1);
      }
      inc(5).then(data => console.log(`inc(5) = ${data}`));


//Sum Function


async function sum(a,b){
    return timeout().then(() => a+b);
}
sum(1,3).then(result => console.log (`sum(1,3) = ${result}`));

// Max Function

async function max(a, b){

return timeout().then(() => a > b ? a : b);
}
max(8,6).then(data => console.log (`max(8,6) = ${data}`));


// Function for Average

async function avg (a,b) {
    return timeout().then(() => sum(a,b)).then(s => s/2);
}
avg(8,6).then(data => console.log(`avg(8, 6) = ${data}`));

// Function for Split and class person

const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return timeout().then(() => this.name.split(sep));
    },
  };
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static async of(name) {
        return timeout().then(()=>new Person(name));
      }
  
    async split(sep = " ") {
      return timeout().then(() => this.name.split(sep));
    }
  }
  
  const person = Person.of("Marcus Aurelius");
  
  obj.split().then(data => console.log(`obj.split() = ${data}`));
  person.then((person) => person.split()).then(data => console.log(`person.split() = ${data}`));
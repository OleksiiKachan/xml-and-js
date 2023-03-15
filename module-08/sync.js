const timeout = (ms = 1500) => new Promise(resolve => setTimeout(resolve,ms));

function inc(a) {
  return timeout().then(() => a+1);
}

// ***ASYNC METHOD OF WRITING
//async function inc(a){
// await timeout()
// return(a+1)
//}

const sum = function (a, b) {
  return timeout().then(() => a + b);
};

const max = (a, b) => {
  return timeout().then(() => (a > b ? a : b));
};

const avg = (a, b) => {
  return timeout().then(() => sum(a,b)).then(s => s/2);
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return timeout().then(() => this.name.split(sep))
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    return timeout().then(() => new Person(name));
  }

  async split(sep = " ") {
    return timeout().then(() => this.name.split(sep))
  }
}

const person = Person.of("Marcus Aurelius");

inc(5).then(data => console.log(`inc(5) = ${data}`))
//console.log("inc(5) =", await inc(5)); ****ASYNC METHOD OF WRITING

sum(1,3).then(data => console.log(`sum(1, 3) = ${data}`))
// console.log("sum(1, 3) =", await sum(1, 3));

max(8,6).then(data => console.log(`max(8, 6) = ${data}`))
// console.log("max(8, 6) =", await max(8, 6));

avg(8, 6).then(data => console.log(`avg(8, 6) = ${data}`))
// console.log("avg(8, 6) =", await avg(8, 6));

obj.split().then(data => console.log(`obj.split() = ${data}`))
// console.log("obj.split() =", obj.split());

person.then((person) => person.split()).then((data) => console.log(`person.split() = ${data}`))
// console.log("person.split() =", person.split());

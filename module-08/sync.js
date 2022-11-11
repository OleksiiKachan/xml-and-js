const { resolve } = require("path");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function inc(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};
const max = (a, b) => (a > b ? a : b);

const avg = async (a, b) => {
  await wait();
  const s = await sum(a, b);
  return s / 2;
};

const inc2 = (a) => new Promise((resolve) => wait().then(() => resolve(a+1)));
const sum3 = (a,b) => new Promise((resolve) => wait().then(() => resolve(a+b)));
const max3 = (a,b) => new Promise((resolve) => wait().then(() => resolve(a > b ? a : b)));
const avg3 = (a,b) => new Promise((resolve) => wait()
    .then(() => sum3(a,b))
    .then((value) => resolve(value / 2)));

    const obj = {
      name: "Marcus Aurelius",
      split(sep = " ") {
      return new Promise((resolve) =>
      wait().then(()=> resolve(this.name.split(sep))));
      }
    };

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Promise((resolve) => 
    wait().then(()=> resolve(new Person(name))));
    
  }
   split(sep = " ") {
    return new Promise((resolve) => 
    wait().then(() => resolve(this.name.split(sep))));
    
  }
}
inc2(5).then(value => console.log(`inc2(5) = ${value}`));
sum3(5,2).then(value => console.log(`sum3(5,2) = ${value}`));
max3(5,2).then(value => console.log(`max3(5,2) = ${value}`));
avg3(8,6).then(value => console.log(`avg3(8,6) = ${value}`));

Person.of("Marcus Aurelius")
.then(person => person.split())
.then((value) => console.log(`person.split() = ${value}`));

obj.split().then(value => console.log(`obj.split() = ${value}`));


//Person.of("Marcus Aurelius").then(value => console.log(`avg3(8,6) = ${value}`));


/*
const obj2 = {
  name: "Marcus Aurelius",
  aync split(sep = " ") {
    await wait()
    return this.name.split(sep);
  }
};*/

/*class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    await wait()
    return new Person(name);
  }

  async split(sep = " ") {
    await wait()
    return this.name.split(sep);
  }
}*/


//inc(5).then(value => console.log(`inc(5) = ${value}`));
/*
const main = async()=> {
  const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());
}
main*/
/*
no fun name
inc(5).then(value => console.log(`inc(5) = ${value}`));

(async()=> {
  const person = await Person.of("Marcus Aurelius");

console.log("inc(5) =", await inc(5));
console.log("sum(1, 3) =", await sum(1, 3));
console.log("max(8, 6) =", await max(8, 6));
console.log("avg(8, 6) =", await  avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());
})()*/
/*const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());*/


/*const main = async()=> {
  const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());
}*/
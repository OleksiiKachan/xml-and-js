const { resolve } = require("path");

const wait = (ms=2000)=> new Promise((resolve)=> setTimeout(resolve,ms));

const ins = async(a)=>{
  await wait();
  return a +1;
}
//promise
const ins2 = (a)=> new Promise((resolve)=> wait().then(()=> resolve(a+ 1)));

function inc(a) {
  return a + 1;
}

//promises
const sum2 = (a,b) => new Promise((resolve)=> wait().then(()=> resolve(a+b)));

const sum = function (a, b) {
  return a + b;
};


const max2 = (a,b)=> new Promise((resolve)=> wait().then(()=> resolve(a > b ? a :b)));

const max = (a, b) => (a > b ? a : b);

//promises
const avg2 = (a,b) => new Promise((resolve) => wait()
                                  .then(()=> sum2(a ,b))
                                  .then((s)=> resolve (s/2)));

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};
const obj2 = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve) => wait().then(() => resolve(this.name.split(sep))))
  },
};
const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return this.name.split(sep);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Promise((resolve)=> wait().then(()=> resolve(new Person(name))));
  //  return new Person(name);
  }

  split(sep = " ") {
    //return this.name.split(sep);
    return new Promise((resolve) => wait().then(() => resolve(this.name.split(sep))))
  }
}



// const main = async () => {

//   const person = await Person.of("Marcus Aurelius");

//   console.log("inc(5) =", await ins2(5));
//   console.log("sum(1, 3) =", await sum2(1, 3));
//   console.log("max(8, 6) =", await max2(8, 6));
//   console.log("avg(8, 6) =", await avg2(8, 6));
//   console.log("obj.split() =", await obj.split());
//   console.log("person.split() =", await person.split());
// }

// main()


ins2(6).then((value)=> console.log(`inc(6)  = ${value}`));
sum2(2,2).then((value)=>console.log(`sum2(2,2) = ${value}`));
max2(4,8).then((value)=>console.log(`max2(8,4) is  = ${value}`));
avg2(4,8).then((value)=>console.log(`avg2(8,4) is  = ${value}`));
Person.of("Marcus Aurelius")
.then((person)=> person.split())
.then((value)=>console.log(`person.split() = ${value}`))
obj2.split().then((value)=>console.log(`object.split() is  = ${value}`))


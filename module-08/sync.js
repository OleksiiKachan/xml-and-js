function inc(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
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
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());

//method2 Activity(module 8)

const wait = (ms = 2000) => new Promise((resolve) => setTimeout(resolve,ms));
const inc2 = (a) => 
  new Promise((resolve)=>{
    wait().then(()=> resolve(a+1));
  })

const sum2 = (a,b) => {
  return new Promise((resolve) => {
    wait().then(() => resolve(a+b));
  })
}

const max2 = (a,b) => {
  return new Promise((resolve) => {
    wait().then(() => resolve(a > b ? a : b));
  })
}

const avg2 = (a,b) => {
  return new Promise((resolve) => {
    wait().then(() => sum(a,b))
    .then((s)=> resolve(s/2))
  });
}

const obj2 = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve)=> {
      wait().then(()=> resolve(this.name.split(sep)) );
    })
  },
};

class Person2 {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Promise((resolve) => 
    wait().then(()=> resolve (new Person(name))));
  }

  split(sep = " ") {
    return new Promise((resolve)=> {
      wait().then(() => resolve(this.name.split(sep)));
    })
  }
}

const main = async()=>{
  const person = await Person.of("Marcus Aurelius");
  console.log(person);
  console.log("inc(5) =", await inc2(5));
  console.log("sum(1, 3) =", await sum2(1, 3));
  console.log("max(8, 6) =", await max2(8, 6));
  console.log("avg(8, 6) =", await avg2(8, 6));
  console.log("obj.split() =", await obj2.split());
  console.log("person.split() =", await person2.split());
};

main();

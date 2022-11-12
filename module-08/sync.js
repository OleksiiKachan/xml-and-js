const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve,ms));

function inc(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const summ = async (a,b) => {
await wait();
return summ(a+b);
}

const maxx = async(a,b) => {
  await wait();
  return (a>b?a:b);
}


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

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static of(name) {
//     return new Person(name);
//   }

//   split(sep = " ") {
//     return this.name.split(sep);
//   }
// }

const wai = (ms = 1000) => new Promise((resolve) => setTimeout(resolve,ms));

const maxi = (a,b) =>
new Promise ((resolve) => wait().then(() => resolve(a>b?a:b)));


const avgi = (a,b) =>
new Promise((resolve)=>
wait()
.then(() => sum(a,b))
.then((s) => resolve (a/2)));


class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name){
    return new Promise(resolve => 
      wait().then(() => resolve(new Person(name))));
  }

  split = (sep=" ")=>
  new Promise((resolve)=>
  wait().then(() => resolve(sep)));
}



// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static of(name) {
//     return new Person(name);
//   }

//   async split(sep = " ") {
//     await wait();
//     return this.name.split(sep);
//   }
// }

const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
//console.log("person.split() =",split());

console.log("summ(2,2) = ", sum(2,2));
//console.log("maxx(2,3 = ", maxx(2,3));





const main = async() => {
  console.log("maxx(2,3 = " ,await maxx(2,3));
 // const person = await Person.of("MArcus Aurelius");
};

main();

maxx(4,5).then((value) => console.log(`maxx(4,5) = ${value}`));
//console.log("person.split() =", person.split());
person.split().then((value)=> console.log(`Split = ${value}`));

// can also do like this..

// (async() => {
//   console.log("maxx(2,3 = " ,await maxx(2,3));
//   const person = await Person.of("MArcus Aurelius");
// })();

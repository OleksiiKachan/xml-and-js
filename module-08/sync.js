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
const wait = (ms = 1000) => new Promise ((resolve) => setTimeout (resolve , ms));
const inc0 = async (a) => {
  await wait ();
  return a + 1 ;
}


const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());

/*************************************/

const _wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve,ms));

const _inc = (a)=>
new Promise((resolve) =>
_wait().then(() => resolve(a+1)));



const _sum = (a,b)=>
new Promise((resolve)=>
_wait().then(() => resolve(a+b)));

const _max =(a,b)=>
new Promise((resolve)=> 
_wait().then(()=> resolve(a>b?a:b)));

const _avg = (a,b) =>
new Promise((resolve)=>
_wait().then(() => resolve((a+b)/2)));


const _obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve) =>
    wait().then(() => 
    resolve(this.name.split(sep))));
  }
};
  

class _Person {
    constructor(name) {
      this.name = name;
    }

    static of(name) {
      return new Promise((resolve) => 
      wait().then(()=> resolve(new _Person(name))));

    }
     split(sep = " ") {
      return new Promise((resolve) => 
      wait().then(() => 
      resolve(this.name.split(sep))));
  }}

console.log("******** Refactoring by Promise ********");

_inc(5).then((value) => console.log(`inc(5) = ${value}`));
_sum(1,3).then((value) => console.log(`sum(1,3) = ${value}`));
_max(8,6).then((value) => console.log(`max(8,6) = ${value}`));
_avg(8,6).then((value) => console.log(`avg(8,6) = ${value}`));
_obj.split().then((value) => console.log(`split() = ${value}`));

_Person.of("Marcus Aurelius")
.then(person => person.split())
.then((value) => console.log(`Class Split = ${value}`));



/*****************************************/

//   let a;
//   let b;
// const inc = (a) => 
//   new Promise ((resolve , reject) => {
//     if (a != null )
//     resolve ( a + 1);
//     else
//     reject ("there is no value to increase.");
//   });

//   const sum1 = (a , b) => 
//   new Promise ((resolve , reject) => {
//     if (a != null && b != null)
//     resolve ( a + b);
//     else
//     reject ("there is no value to sum.");
//   });

//   const max1 = (a , b) => 
//   new Promise ((resolve , reject) => {
//     if (a != null && b != null ){
//       resolve (a > b ? a : b);
//     }
//     else
//     reject ("???");
//   });

 
//   const avg1 = (a , b) => 
//   new Promise ((resolve , reject) => {
//     if (a != null && b != null ){
//       resolve (( a + b) / 2);
//     }
//     else
//     reject ("???");
//   });

//   name: "Marcus Aurelius";
//   /*
//   const obj1 = (name) =>
//   new Promise ((resolve , reject) => {
//     if (true){
//       split(sep = " ") {
//         resolve (name.split(sep));
//       };}
//       else
//       reject ("???");      
//     });
//  */   
//     
    
// const test = (a,b) => inc (a)
// .then(sum1(a,b))
// .then(max1(a,b))
// .then(avg1(a,b))
// .then(obj1(?));

// test(a).then(console.log).catch(console.error);

// console.log(test);
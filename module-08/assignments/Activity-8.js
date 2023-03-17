/*Name:Garry Mittal
Student Number: N01552883
Activity:8
*/
const { Console } = require("console");

const timeout = () => new Promise((resolve)=>setTimeout(resolve,1500));


function inc(a) {

  return timeout().then(()=>a+1);
  /*await timeout();
  return a + 1;*/
}

const sum = function (a, b) {
 

  return timeout().then(()=>a+b);

  // await timeout();
  // return a + b;
};

const max = (a, b) => {
  // await timeout();
  // return a > b ? a : b

  return timeout().then (()=>a > b ? a : b);
};

const avg = (a, b) => {
  // await timeout();
  // const s = await sum(a, b);
  // return s / 2;

  return timeout().then(()=>{
    return sum(a,b).then(
      (total)=>{
        return total/2;
      }
    );
  });
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return timeout().then(
      ()=> {
        return this.name.split(sep);
      }
    );
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return timeout().then(
      ()=> {
         return new Person(name);
      });
  }

  split(sep = " ") {
    return timeout().then(
      ()=>{
        return this.name.split(sep);
      }
    );
  }
};

/*(async () =>{
const person = await Person.of("Marcus Aurelius");

console.log("inc(5) =", await inc(5));
console.log("sum(1, 3) =", await sum(1, 3));
console.log("max(8, 6) =", await max(8, 6));
console.log("avg(8, 6) =", await avg(8, 6));
console.log("obj.split() =",await obj.split());
console.log("person.split() =",await person.split());

})();*/


inc(5).then((res)=>console.log("inc(5)= ",res))
.then(()=>sum(1,3).then((add)=>console.log("Add(1,3)= ",add)))
.then(()=>max(8,6).then((high)=>console.log("max(8,6)= ",high))
.then(()=>avg(8,6).then((avr)=>console.log("avg(8,6)= ",avr)))
.then(()=>obj.split().then((splitresult)=>console.log("obj.split()= ",splitresult))
.then(()=>Person.of("Marcus Aurelius").then((p)=>p.split().then((psplit)=>console.log("person.split()= ",psplit))))

))
;


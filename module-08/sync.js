const wait = (ms = 2000) => new Promise((resolve)=>setTimeout(resolve, ms));

const inc = async(a)=>{
  await wait();
  return a+1;
}
const inc2 = (a)=> new Promise((resolve) =>wait().then(()=>resolve(a+1)));
const sum = async(a,b)=>
{
  await wait();
  return a+b;
}
const sum2 = (a,b)=> new Promise((resolve) =>wait().then(()=>resolve(a+b)));
const max = async(a,b)=>{
  await wait;
  return (a > b ? a : b);
}
const max2 = (a,b)=> new Promise((resolve) =>wait().then(()=>resolve(a > b ? a : b)));
const avg = async (a, b) => {
  await wait;
  const s = await sum(a, b);
  return s / 2;
};

const avg2 = (a,b)=> new Promise((resolve) =>wait()
.then(()=>sum(a,b)).
then((s)=>resolve(s/2)));


const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    // return this.name.split(sep);
    return new Promise((resolve)=>
  {
    wait().then(()=>resolve(this.name.split(sep)));
  });
  },
};




class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    return new Promise((resolve)=>
  {
    wait().then(()=>resolve(new Person(name)));
  });
  }

  async split(sep = " ") {
    return new Promise((resolve)=>
  {
    wait().then(()=>resolve(this.name.split(sep)));
  });

 }
}


inc2(5).then((value)=>console.log(`inc(5)= ${value}`));
sum2(5,3).then((value)=>console.log(`sum(5,3)= ${value}`));
max2(5,3).then((value)=>console.log(`max(5,3)= ${value}`));

avg2(5,3).then((value)=>console.log(`avg(5,3)= ${value}`));
obj.split().then((value)=>console.log(`obj.split()= ${value}`));
// Person.of('janki'.split()).then((value)=>console.log(`person.split()= ${value}`));
Person.of("janki").then(Person=>Person.split().then((value)=>console.log(`person = ${value}`)));
(async()=>{
  const person = await Person.of("Marcus Aurelius");
console.log("inc(5) =", await inc(5));
console.log("sum(1, 3) =", await sum(1, 3));
console.log("max(8, 6) =", await max(8, 6));
console.log("avg(8, 6) =", await avg(8, 6));
console.log("obj.split() =", await obj.split());
console.log("person.split() =", await person.split());
})();
const wait=(ms=1000)=>new Promise((resolve)=>setTimeout(resolve,ms));

const inc=(a)=> {
  return new Promise((resolve)=>wait().then(()=>resolve(a + 1)));
};
const sum =(a,b)=> new Promise((resolve)=>{
  wait().then(()=>resolve(a+b))
})

const max = (a,b) => new Promise((resolve)=>{
  wait().then(()=>resolve(a > b ? a : b))
})

const avg =(a,b)=> new Promise((resolve)=>{
  wait().then(() => sum(a,b).then((sum)=>resolve(sum/2)))
})

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve)=>wait().then(()=>resolve(this.name.split(sep))));
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    wait();
    return new Promise((resolve)=>wait().then(()=>resolve(new Person(name))));
  }

  split(sep = " ") {
    
    return new Promise((resolve)=>wait().then(()=>resolve(this.name.split(sep))));
    //return this.name.split(sep);
  }
}

main=()=>{
  const person = Person.of("Marcus Aurelius");

console.log("inc(5) =",   inc(5));
console.log("sum(1, 3) =",  sum(1, 3));
console.log("max(8, 6) =",  max(8, 6));
console.log("avg(8, 6) =",  avg(8, 6));
console.log("obj.split() =",  obj.split());
console.log("person.split() =", person);
}

main();
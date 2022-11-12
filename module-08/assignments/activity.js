function fun1(){
    return new Promise((resolve, reject) => {  
    resolve()
  });
}
  
  // const inc = async(a) => {
  //   await wait();
  //   return a+1;
  // }
  
  // inc(5).then((value) => console.log(`inc(5) = ${value}`))
  
  function inc(a) {
    return new Promise((resolve, reject) => {  
        resolve(a+1)
      });
  }

  function sum(a,b) {
    return new Promise((resolve, reject) => {  
        resolve(a+b)
      });
  }

  function max(a,b) {
    return new Promise((resolve, reject) => {  
        resolve(a > b ? a : b)
      });
  }

  function avg(a,b) {
    return new Promise((resolve, reject) => { 
        resolve((a+b)/2)
      });
  }

  function objPr(obj) {
    return new Promise((resolve, reject) => { 
        sep = " ";
        resolve(obj.name.split(sep))
    });
  }
  
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

  function personPr(person){
    return new Promise((resolve, reject) => { 
        resolve(person.name.split(sep))
      });
  }

fun1().then(() => inc(5)).then((res) => console.log("inc(5) = " + res))
fun1().then(() => sum(5,3)).then((res) => console.log("sum(5,3) = " + res))
fun1().then(() => max(9,6)).then((res) => console.log("max(9,6) = " + res))
fun1().then(() => avg(6,8)).then((res) => console.log("avg(6,8) = " + res))
fun1().then(() => objPr(obj)).then((res) => console.log("objPr(obj) = " + res))
fun1().then(() => personPr(person)).then((res) => console.log("personPr(person) = " + res))
  
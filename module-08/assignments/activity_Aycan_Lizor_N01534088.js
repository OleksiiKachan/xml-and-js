
const inc = (a) =>
new Promise ((resolve, reject) => {
    if(!isNaN(a)){
       resolve( console.log("inc(5) =", a+1));
    }
    else{
        reject("input is not a number");
    }
});


const sum = (a,b) =>
new Promise ((resolve, reject) => {
    if(!isNaN(a) && !isNaN(a) ){
       resolve( console.log("sum(1, 3) =", a+b));
    }
    else{
        reject("input is not a number");
    }
});

const max = (a,b) =>
new Promise ((resolve, reject) => {
    if( !isNaN(a) && !isNaN(b) && a != b ){
       resolve( console.log("max(8, 6) =", a > b ? a : b));
    }
    else{
        reject("error");
    }
});

const avg = (a,b)=>
new Promise((resolve, reject) =>{
    if(!isNaN(a) && !isNaN(b)){
        resolve(console.log("avg(8, 6) = " +(a+b)/2));
    }
    else{
        reject("inputs are not numbers");
    }

});

const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return this.name.split(sep);
    },
  };


  const objSplit = (obj) =>
new Promise ((resolve, reject) =>{

    if(obj != null){
resolve (console.log("obj.split() =", obj.split()));
    }
    else{
        reject("object is null")
    }

});




//-----------------------------------  

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

  const personPromise = (person) =>
  new Promise((resolve, reject) =>{
    if(person != null){
       resolve (console.log("person.split() = "+ person.name.split(" ")));
    }
    else{
        reject("null object");
    }
});

//-----------------------------------------------------------------------  

inc(5);
sum(1,4);
max(8,6);
avg(8,6);
personPromise(person);
objSplit(obj);


  
  

  
 
  
  
 
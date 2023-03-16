const timeout = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

     async function inc(a) {
       return timeout().then(() =>a + 1);
     }

     const sum = async function(a,b){
        return timeout().then(()=>a+b);
     };

     const max = async(a,b)=> {
        return timeout().then(()=> a>b ? a:b);
     };

     const avg = async(a,b) => {
        return timeout().then(() => sum(a,b).then((data) => data/2 ));
     };

     const obj = {
        name : "Marcus Aurelius",
        async split(sep = " ") {
            return timeout().then(() => this.name.split(sep));
        },
     };

     class Person {
       constructor(name) {
         this.name = name;
       }

       static of(name) {
         return new Person(name);
       }

       async split(sep = " ") {
         return timeout().then(() => this.name.split(sep));
       }
     }

     const person = new Person("Marcus Aurelius");

     (async () => {
       console.log("inc(5) =", await inc(5));
       console.log("sum(1, 3) =", await sum(1, 3));
       console.log("max(8, 6) =", await max(8, 6));
       console.log("avg(8, 6) =", await avg(8, 6));
       console.log("obj.split() =", await obj.split());
       console.log("person.split() =", await person.split());
     })();
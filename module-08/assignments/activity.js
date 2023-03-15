const timeout = (ms = 1500) => new Promise((resolve) => setTimeout(resolve, ms));
     
     async function inc(a) {
       return timeout().then(() => a + 1);
     }
     
     const sum = async function (a, b) {
       return timeout().then(() => a + b);
     };
     
     const max = async (a, b) => {
       return timeout().then(() => a > b ? a : b);
     };
     
     const avg = async (a, b) => {
       return timeout(3000).then(() => sum(a,b).then((sum) => sum /2 ));
     };
     
     const obj = {
       name: "Marcus Aurelius",
       async split(sep = " ") {
         return timeout(3000).then(()=> this.name.split(sep));
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
       console.log("await inc(5) =", await inc(5));
       console.log("await sum(1, 3) =", await sum(1, 3));
       console.log("await max(8, 6) =", await max(8, 6));
       console.log("await avg(8, 6) =", await avg(8, 6));
       console.log("await obj.split() =", await obj.split());
       console.log("await person.split() =", await person.split());
     })();
     
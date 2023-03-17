//MODULE 8
const promise = () => new Promise((resolve, reject) => {
    setTimeout(resolve(), 3000); 
});

//1
function incTest(a){
    return promise().then(() => a+1);
}

incTest(5).then(data => console.log("inc(5) =", data));

//2
const sum = function (a, b) {
    return promise().then(() => a + b);
}
sum(1, 3).then(data => console.log("sum(1, 3) =", data));

//3
const max = (a, b) => (promise().then(() => a > b ? a : b));
max(8, 6).then(data => console.log("max(8, 6) =", data));

//4
const avg = (a, b) => {
    const s = sum(a,b).then((s) => s/2);
    return s.then(data => console.log("avg(8, 6) =", data));
}
avg(8, 6);

//5
const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
        return promise().then(() => this.name.split(sep));
    }
}
obj.split().then((data) => console.log("obj.split() =", data));

//6
class Person {
    constructor(name) {
      this.name = name;
    }
  
    static of(name) {
      return new Person(name);
    }
  
    split(sep = " ") {
        return promise().then(() => this.name.split(sep));
    }
}
const person = Person.of("Marcus Aurelius");
person.split().then((data) => console.log("person.split() =", data));
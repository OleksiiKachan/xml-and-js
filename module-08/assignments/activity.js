// Activity
// Rewrite sync.js using Promises​
// Attach screenshot of the output in your terminal

const timeout = (ms = 1500) => new Promise(resolve => setTimeout(resolve,ms));

function inc(a) {
    return timeout().then(() => a+1)
}

function sum(a, b){
    return timeout().then(() => a + b)
}

function max(a,b){
    return timeout().then(() => a > b ? a : b)

}

function avg (a,b){
    return timeout().then(() => sum(a,b).then(avg => avg/2))
}

const obj = {
    name: "Marcus Aurelius",
    split(sep = " "){
        return timeout().then(() => this.name.split(sep))
    }
}

class Person{
    constructor(name){
        this.name = name;
    }

    static of(name){
        return timeout().then(() => new Person(name));
    }
    
    splipt(sep = " "){
        return timeout().then(() => this.name.split(sep));
    }
}

const person = new Person("Marcus Aurelius");

// function 

// inc(10).then(data => console.log(data))
// sum(12,12).then(data => console.log(data))
// max(15,100).then(data => console.log(data))
// avg(7,3).then(data=> console.log(data))
// obj.split().then(data => console.log(data))
// person.splipt().then(data => console.log(data))

inc(10).then(data => console.log(data))
    .then(() => sum(12, 12).then(data => console.log(data)))
    .then(() => max(15,100).then(data => console.log(data)))
    .then(() => avg(7,3).then(data=> console.log(data)))
    .then(() => obj.split().then(data => console.log(data)))
    .then(() => person.splipt().then(data => console.log(data)))



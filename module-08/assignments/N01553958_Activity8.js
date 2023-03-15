const timeout = (ms) => 
new Promise((resolve) => setTimeout(resolve, ms))

 // It calls a function named 'timeout' which returns a promise.
 // The promise will be resolved after a certain time period.
 // Once the promise is resolved, it executes a callback function that increments the value of 'a' by 1.
 // The updated value is then returned by the promise.
function inc(a)
{
    return timeout().then(() => a+1); 
}

 // The function returns a Promise that resolves to the sum of a and b
const sum = function (a,b)
{
    return timeout().then(() => a+b);
};

 // The function returns a Promise that resolves to the max of a and b
const max = (a,b) => timeout().then(()=>(a>b ? a:b));

 // The function returns a Promise that resolves to the average of a and b
const avg = (a,b) => sum(a,b).then((sum)=>(sum/2));

const obj =
{
    name: "Marus Aurelius",
    // This is a method called "split" uses the default value as a space
    split(sep = " ")
    {
    // This function returns a Promise which resolves after a timeout of 1 second
        return timeout().then(() => this.name.split(sep))
    },
};

class Person 
{
    constructor(name) 
    {
      this.name = name;
    }

    static of(name)
    {
    return timeout().then(() => new Person(name));
    }

 // It returns a promise that resolves to the array of split strings
    split(sep = " ")
    {
    return timeout().then(() => this.name.split(sep));
    }
}

 //Printing the promises created
inc(5)
.then((v) => console.log("inc(5) =", v))
.then((v) => sum(1,3))
.then((v) => console.log("sum(1, 3) =", v))
.then((v) => max(8,6))
.then((v) => console.log("max(8, 6) =", v))
.then((v) =>avg(8,6))
.then((v) => console.log("avg(8, 6) =", v))
.then((v) =>obj.split())
.then((v) => console.log("obj.split() =", v))
.then(() => Person.of("Marcus Aurlius"))
.then((p) => p.split)
.then((v) => console.log("person.split()", v))
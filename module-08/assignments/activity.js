const wait = () => new Promise(function (resolve) {
    setTimeout(function () {
        resolve();
    }, 1000);
});

const inc = (a) => new Promise(function (resolve) {
    wait().then(() => resolve(a + 1));
});

const sum = (a, b) => new Promise(function (resolve) {
    wait().then(() => resolve(a + b));
});

const max = (a, b) => new Promise(function (resolve) {
    wait().then(() => resolve(a > b ? a : b));
});

const avg = (a, b) => new Promise(function (resolve) {
    wait().then(() => sum(a, b)).then((value) => resolve(value / 2))
});

const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
        return new Promise((resolve) =>
            wait().then(() =>
                resolve(this.name.split(sep))));
    }
};

class Person {
    constructor(name) {
        this.name = name;
    }
    static of(name) {
        return new Promise((resolve) =>
            wait().then(() => resolve(new Person(name))));
    }
    split(sep = " ") {
        return new Promise((resolve) =>
            wait().then(() =>
                resolve(this.name.split(sep))));
    }
}

console.log("\n-----------------Output-----------------");
inc(5).then((value) => console.log(`Incremented Value: ${value}`));
sum(1, 3).then((value) => console.log(`Sum: ${value}`));
max(8, 6).then((value) => console.log(`Max: ${value}`));
avg(8, 6).then((value) => console.log(`Avg: ${value}`));
obj.split().then(value => console.log(`Obj(Split): ${value}`));
Person.of("Marcus Aurelius").then(person => person.split()).then((value) => console.log(`Person(Split): ${value}`));
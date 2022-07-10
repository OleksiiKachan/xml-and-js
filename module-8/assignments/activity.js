function inc(a) {
    return new Promise((resolve) => {
        resolve(a + 1);
    });
}

const sum = (a, b) => {
    return new Promise((resolve) => {
        resolve(a + b);
    });
};

const max = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a > b) 
            resolve(a);
        else reject(b);
    });
};

const avg = (a, b) => {
    return sum(a, b)
    .then((s) => s / 2);
};

const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
        return new Promise((resolve) => {
            resolve(this.name.split(sep));
        });
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
        return new Promise((resolve) => {
            resolve(this.name.split(sep));
        });
    }
}

const person = Person.of("Marcus Aurelius");

inc(5)
    .then((Data) => console.log("inc(5) =", Data))
    .catch((Error) => console.error("Error:", Error)); 

sum(1, 3)
    .then((Data) => console.log("sum(1, 3) =", Data))
    .catch((Error) => console.error("Error:", Error));

max(8, 6)
    .then((Data) => console.log("max(8, 6) =", Data))
    .catch((Error) => console.error("Error:", Error));

avg(8, 6)
    .then((Data) => console.log("avg(8, 6) =", Data))
    .catch((Error) => console.error("Error:", Error));

obj.split()
    .then((Data) => console.log("obj.split() =", Data))
    .catch((Error) => console.error("Error:", Error));

person
    .split()
    .then((Data) => console.log("person.split() =", Data))
    .catch((Error) => console.error("Error:", Error));
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
        else 
            reject(b);
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
    .then((data) => console.log("inc(5) =", data))
    .catch((err) => console.error("Error:", err)); 

sum(1, 3)
    .then((data) => console.log("sum(1, 3) =", data))
    .catch((err) => console.error("Error:", err));

max(8, 6)
    .then((data) => console.log("max(8, 6) =", data))
    .catch((err) => console.error("Error:", err));

avg(8, 6)
    .then((data) => console.log("avg(8, 6) =", data))
    .catch((err) => console.error("Error:", err));

obj.split()
    .then((data) => console.log("obj.split() =", data))
    .catch((err) => console.error("Error:", err));

person
    .split()
    .then((data) => console.log("person.split() =", data))
    .catch((err) => console.error("Error:", err));
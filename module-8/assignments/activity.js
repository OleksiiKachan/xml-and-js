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
        if (a > b) resolve(a);
        else reject(b);
    });
};

// without reject
const max2 = (a, b) => {
    return new Promise((resolve) => {
        resolve(a > b ? a : b);
    });
};

// ***
const avg = (a, b) => {
    return sum(a, b).then((s) => s / 2);
};

const avg2 = (a, b) => {
    return new Promise((resolve) => {
        const avg = sum(a, b).then((s) => s / 2);
        resolve(avg);
    });
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

const test = () => {
    // console.log("inc(5) =", inc(5));
    inc(5).then((value) => console.log("inc(5) =", value));

    // console.log("sum(1, 3) =", sum(1, 3));
    sum(1, 3).then((value) => console.log("sum(1, 3) =", value));

    // console.log("max(8, 6) =", max(8, 6));
    max(8, 6)
        .then((value) => console.log("max(8, 6) =", value))
        .catch((value) => console.log("max(8, 6) =", value));

    max(6, 8)
        .then((value) => console.log("max(6, 8) =", value))
        .catch((value) => console.log("max(6, 8) =", value));

    max2(6, 8).then(console.log);

    // console.log("avg(8, 6) =", avg(8, 6));
    avg(8, 6).then((value) => console.log("avg(8, 6) =", value));

    avg2(20, 50).then(console.log);

    // console.log("obj.split() =", obj.split());
    obj.split().then((value) => console.log("obj.split() =", value));

    // console.log("person.split() =", person.split());
    person.split().then((value) => console.log("person.split() =", value));

    person.split().then(console.log);
};

// test();

const main = async () => {
    console.log("inc(5) =", await inc(5));
    console.log("max(8, 6) =", await max(8, 6));
    console.log("avg(8, 6) =", await avg(8, 6));
    console.log("obj.split() =", await obj.split());
    console.log("person.split() =", await person.split());
};

main();

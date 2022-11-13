const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));
const summ = async (a, b) => {
    await wait();
    return summ(a + b);
}

const maxx = async (a, b) => {
    await wait();
    return (a > b ? a : b);
}
console.log("summ(2,2) = ", summ(2, 2));

const main = async () => {
    console.log("maxx(2,3) = ", await maxx(2, 3));
};

main();

maxx(4, 5).then((value) => console.log(`maxx(4,5) = ${value}`));

class Person {
    constructor(name) {
        this.name = name;
    }


    static of(name) {
        return new Promise((resolve) => wait.then(() => resolve(new Person(name))));
    }

    static split(sep = " ") {
        return this.name.split(sep);
    }
}
console.log(resolve);
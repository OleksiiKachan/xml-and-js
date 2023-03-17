
const timeout = (ms = 1500) => new Promise((resolve) => setTimeout(resolve, ms));


function inc(a) {

    return timeout().then(() => a + 1);
}

const sum = (a, b) => {

    return timeout().then(() => a + b);
};

const max = (a, b) => {

        return timeout().then(() => (a > b ? a : b ));
    }

const avg = (a, b) => {
    return sum(a, b).then((sum) => sum / 2);
}



const obj = {
    name: "Marcus Aurelius",
    split(sep = ' ') {

        return timeout().then(() => this.name.split(sep));
    },
};

class person1 {
    constructor(name) {
        this.name = name;
    }

    static of(name) {

		return timeout().then(() => new person1(name));
	}
    split(sep = ' ') {

        return timeout.then(() => this.name.split(sep));
    }
}


inc(5)
  .then((i) => console.log(' inc(5) =', i))
  .then(() => sum(8, 6))
  .then((i) => console.log(' sum(8, 6) = ', i))
  .then(() => max(8, 6))
  .then((i) => console.log(' max (20, 100) ', i))
  .then(() => avg(8, 6))
  .then((i) => console.log(' avg(8, 6) = ', i))
  .then(() => obj.split()) 
  .then((i) => console.log(' obj.split() = ', i))
  .then(() => person1.of('Marcus Aurelius'))
  .then((i) => i.split())
  .then((i) => console.log(' person1.split() =', i));

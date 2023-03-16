const timeout_func = (ms = 550) => new Promise((resolve) => setTimeout(resolve, ms));

const inc=(a)=>{
	return timeout_func().then(() => a + 1);
}

const sum = (a, b) => {
	return timeout_func().then(() => a + b);
};

const max = (a, b) => {
    return timeout_func().then(() => (a > b ? a : b));
}

const avg = (a, b) => {
     return sum(a, b).then((sum) => sum / 2);
    }

const obj = {
	name: 'Marcus Aurelius',
	split(sep = ' ') {
		return timeout_func().then(() => this.name.split(sep));
	},
};   
 

// person class
class Person {
	constructor(name) {
		this.name = name;
	}
	static of(name) {
		return timeout_func().then(() => new Person(name));
	}
	split(sep = ' ') {
		return timeout_func().then(() => this.name.split(sep));
	}
}

inc(5)
	.then((val) => console.log('1) inc(5) is =', val))
	.then(() => sum(1, 3))
	.then((val) => console.log('2) sum(1, 3) is =', val))
	.then(() => max(8, 6))
	.then((val) => console.log('3) max(8, 6) is =', val))
	.then(() => avg(8, 6))
	.then((val) => console.log('4) avg(8, 6) is =', val))
	.then(() => obj.split())
	.then((val) => console.log('5) obj.split() is =', val))
	.then(() => Person.of('Marcus Aurelius'))
	.then((val) => val.split())
	.then((val) => console.log('6) person.split() is =', val));
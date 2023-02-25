const data = [
	{ born: 1870, died: 1924 },
	{ born: 1893, died: 1976 },
	{ born: 1869, died: 1948 },
	{ born: 1901, died: 1989 },
];

const age = data.map((item) => item.died - item.born);
console.log("Age lived : ",age);

const filtered = age.filter((age) => age > 75);
console.log('Age greater than 75: ', filtered);


const oldest = filtered.reduce((accumulator, age) => {
	if (age > accumulator) {
		accumulator = age;
	}
	return accumulator;
}, 0);
console.log(`Oldest person age : `, oldest);

const chainedData = data
	.map((item) => item.died - item.born)
	.filter((age)=> age > 75)
	.reduce((accumulator, age) => {
		if (age > accumulator) {
			accumulator = age;
		}
		return accumulator;
	}, 0);
console.log('Oldest person age by chaining: ',chainedData)
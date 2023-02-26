const data = [
	{ born: 1870, died: 1924 },
	{ born: 1893, died: 1976 },
	{ born: 1869, died: 1948 },
	{ born: 1901, died: 1989 },
];

const age = data.map(({ born, died }) => died - born);
console.log("Lived : ",age);

const filtered = age.filter((age) => age > 75);
console.log('Filtered: ', filtered);


const old = filtered.reduce((accumulator, age) => {
	if (age > accumulator) {
		accumulator = age;
	}
	return accumulator;
}, 0);
console.log(`Age : `, old);


const cAge = data
	.map(({ born, died }) => died - born)
	.filter((cAge)=> cAge > 75)
	.reduce((cAge, temp) => {
		if (cAge > temp) {
			temp = cAge;
		}
		return temp;
	}, 0);
console.log('Highest: ',cAge)
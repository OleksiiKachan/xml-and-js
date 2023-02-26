const data = [
	{ born: 1870, died: 1924 },
	{ born: 1893, died: 1976 },
	{ born: 1869, died: 1948 },
	{ born: 1901, died: 1989 },
];

const age = data.map(({ born, died }) => died - born);
console.log("Age : ",age);

const filtered = age.filter((age) => age > 75);
console.log('Age greater than 75 is: ', filtered);

const oldest = filtered.reduce((accumulator, age) => {
	if (age > accumulator) {
		accumulator = age;
	}
	return accumulator; 
}, 0);
console.log(`Oldest age is : `, oldest);

const chained = data
	.map(({ born, died }) => died - born)
	.filter((chained)=> chained > 75)
	.reduce((chained, temp) => {
		if (chained > temp) {
			temp = chained;
		}
		return temp;
	}, 0);
console.log('Highest age is: ',chained)
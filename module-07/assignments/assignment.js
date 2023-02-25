const data = [
	{ born: 1870, died: 1924 },
	{ born: 1893, died: 1976 },
	{ born: 1869, died: 1948 },
	{ born: 1901, died: 1989 },
];

const age = data.map(({ born, died }) => died - born);
console.log("Age lived : ",age);

const filtered = age.filter((age) => age > 75);
console.log('Age greater than 75(filtered): ', filtered);

//To find highest age we can use the reduce function by looping through since:
//As .reduce() iterates through the array, the return value of the callback function becomesthe accumulator value for the next iteration, currentValue takes on the value of the current element inthe looping process.
//accumulator,age being parameters of the callback function to find the highest 
const oldest = filtered.reduce((accumulator, age) => {
	if (age > accumulator) {
		accumulator = age;
	}
	return accumulator;
}, 0);
console.log(`Oldest person's age : `, oldest);

//chaining is done with reference to the pdf
const chainedAge = data
	.map(({ born, died }) => died - born)
	.filter((chainedAge)=> chainedAge > 75)
	.reduce((chainedAge, temp) => {
		if (chainedAge > temp) {
			temp = chainedAge;
		}
		return temp;
	}, 0);
console.log('Highest age obtained by chaining: ',chainedAge)
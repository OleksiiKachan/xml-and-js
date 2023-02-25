const data = [
	{ born: 1870, died: 1924 },
	{ born: 1893, died: 1976 },
	{ born: 1869, died: 1948 },
	{ born: 1901, died: 1989 },
];

//calculate age for each entry
const age = data.map(({ born, died }) => died - born);
console.log("Age : ",age);

//filtered age is greater than 75
const filtered = age.filter((age) => age > 75);
console.log('Filtered age is greater than 75: ', filtered);


//highest age
const oldest = filtered.reduce((acc, age) => {
	if (age > acc) {
		acc = age;
	}
	return acc;
}, 0);
console.log('Highest age : ', oldest);

// age using chain
const age_chaining = data
	.map(({ born, died }) => died - born)
	.filter((age_chaining)=> age_chaining > 75)
	.reduce((age_chaining, temp) => {
		if (age_chaining > temp) {
			temp = age_chaining;
		}
		return temp;
	}, 0);
console.log("Highest age using chain ",age_chaining)
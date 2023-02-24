const data=[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

const age = data.map((person) => person.died - person.born);

const filtered = age.filter((year) => year>75);

const oldest = filtered.reduce((highestAge, temp) => {
    if(temp>highestAge){
        highestAge=temp;
    }
    return highestAge;
},0);

//Using chaining
const age_chaining = data
	.map((person) => person.died - person.born)
	.filter((year)=> year > 75)
	.reduce((highestAge, temp) => {
		if(temp>highestAge){
            highestAge=temp;
        }
        return highestAge;
	}, 0);

console.log('================================================================');
console.log('------ Normal Output ------');
console.log('------ Age ------');
console.log(age);

console.log('------ Filtered ------');
console.log(filtered);

console.log('------ Oldest  ------');
console.log(oldest);

console.log('================================================================');
console.log('------ Chaining Output ------');
console.log(age_chaining);



// Vimal Radadiya Assignment
const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

//----individual variable code---
console.log("___________Output using separate variables_______");
const mapped_ages = data.map(({ born, died }) => died - born)
console.log(mapped_ages);

const filtered_ages=mapped_ages.filter(age=>age>75);
console.log(filtered_ages);

const highest_age=filtered_ages.reduce((acc,age)=>{
    if (age>acc) {
        acc=age;
    }
    return acc;

},0);
console.log(highest_age);

console.log("___________Output using chanining_______");

//-----main code using chaining-----
const ages = data.map(({ born, died }) => died - born)
    .filter(age => age > 75)
    .reduce((acc, age) => {
        if (age > acc) {
            acc = age;
        }
        return acc
    }, 0);

console.log(ages); 



// just for practice
// const data = [
// 	{ born: 1870, died: 1924 },
// 	{ born: 1893, died: 1976 },
// 	{ born: 1869, died: 1948 },
// 	{ born: 1901, died: 1989 },
// ];

// const parsed = data
// 	.map(({ born, died }) => {
// 		return {
// 			born,
// 			died,
// 			age: died - born,
// 		};
// 	})
// 	.filter((i)=> i.age > 75)
// 	.reduce((age, temp) => {
// 		if (age > temp) {
// 			temp = age;
// 		}
// 		return temp;
// 	}, 0);

// console.log(parsed.age)
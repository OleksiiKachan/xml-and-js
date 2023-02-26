// Assignment 4

const data = 
[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

const age =data.map(({born,died})=> 
died-born);

console.log("Age : ",age );

const filtered =age.filter((age)=>  age>75);


console.log("Age greater than 75: ",filtered);

const oldest = filtered.reduce((temp, age) =>
{
	return  (temp <= age) ? age : temp;
}
);
console.log(`Highest age : `, oldest);

const chaining = data.map(({ born, died }) => died - born).filter((age)=> age > 75)
	.reduce((temp, age) => 
    {
        return  (temp <= age) ? age : temp;
    }
    );
console.log('Chaining: ',chaining)
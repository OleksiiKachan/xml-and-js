const people = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  console.log(`Source:`);
  
  // const born_year = people.map((person) =>{
  //   return person.born;
  // })

  // console.log("the years of born")
  // console.log(born_year);

  // const died_year = people.map((person)=>{
  //   return person.died
  // })

  // console.log("the years of died");
  // console.log(died_year);
  console.log("Aycan Lizor_N01534088")
  console.log("People");
  console.log(people);
  const peopleWithAge = people;

  for(i=0 ; i < peopleWithAge.length ; i++){

    peopleWithAge[i]["age"] = people[i]["died"]-people[i]["born"];
  }

  console.log("People Array with Ages")
  console.log(peopleWithAge);

  const peopleFiltered = peopleWithAge.filter((person) => person.age > 75);
  console.log("People Array with Ages Bigger Than 75")
  console.log (peopleFiltered);

 const oldestPeople = peopleFiltered.reduce((accum,person) =>{
    return Math.max(person.age);
 },0);

 console.log(oldestPeople);

 const oldestPerson = peopleWithAge.filter((person) => person.age > 75)
                      .reduce((accum,person) =>{ 
                        return Math.max(person.age);
                     },0);

console.log("oldest age: " +oldestPerson);
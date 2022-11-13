const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const inc = (a) => 
    new Promise((resolve) => {
        wait().then(() => resolve(a+ 1));
    });

const sum = (a, b) => 
    new Promise((resolve) => {
        wait().then(() => resolve(a + b));
    });
  
const max = (a, b) => 
    new Promise((resolve) => {
        wait().then(() => resolve(a > b ? a : b));
    });

const avg = (a, b) => 
    new Promise((resolve) => 
        wait().then(() => sum(a,b))
        .then((data) => {
            resolve(data/2);
        }));

const obj = 
{
  name: "Marcus Aurelius",
  split(sep = " ") 
  {
    return new Promise((resolve) =>
      wait().then(() => 
        resolve(this.name.split(sep))));
  }
};
        
        
class Person 
{
  constructor(name) 
  {
    this.name = name;
  }
  static of(name) 
  {
    return new Promise((resolve) => 
      wait().then(()=> resolve(new Person(name))));
  }
  split(sep = " ") 
  {
    return new Promise((resolve) => 
      wait().then(() => 
        resolve(this.name.split(sep))));
  }
}

inc(5).then((value) => console.log(`${value}`));
sum(1, 3).then((value) => console.log(`${value}`));
max(8, 6).then((value) => console.log(`${value}`));
avg(8, 6).then((value) => console.log(`${value}`));
obj.split().then(value => console.log(`${value}`));
Person.of("Marcus Aurelius").then(person => person.split()).then((value) => console.log(`${value}`));
  
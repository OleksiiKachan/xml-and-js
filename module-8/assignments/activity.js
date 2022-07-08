const v = ms => new Promise(function (resolve) {
  setTimeout(resolve, ms)
});

const inc = (a) => v(3000).then(() => a + 1);

const sum = (a, b) => v(3000).then(() => a + b);

const max = (a, b) => v(3000).then(() => a > b ? a : b);

const avg = (a, b) => v(3000).then(() => sum(a, b)).then(s => s / 2);

const obj = {
name: "Marcus Aurelius",
split(sep = " ") {
  return v(3000).then(() => this.name.split(sep));
},
};

class Person {
constructor(name) {
  this.name = name;
}

static of(name) {
  return new Person(name);
}

split(sep = " ") {
  return v(3000).then(() => this.name.split(sep));
}
}

const person = Person.of("Marcus Aurelius");

function doLogs() {
Promise.all([inc(5), sum(1, 3), max(8, 6), avg(8, 6), obj.split(), person.split()])
.then(values => {
  console.log("inc(5) =", values[0]);
  console.log("sum(1, 3) =", values[1]);
  console.log("max(8, 6) =", values[2]);
  console.log("avg(8, 6) =", values[3]);
  console.log("obj.split() =", values[4]);
  console.log("person.split() =", values[5]);
});
}

doLogs();
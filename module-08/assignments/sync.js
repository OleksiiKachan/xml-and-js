//function inc(a) {
//  return a + 1;
//}

function inc(a) {
  return new Promise ((resolve, reject) => {
    if (isNaN(a))
    {
      reject ({
        error: ('it is not a number')
      })
    }
    else
    {  
      resolve ({
        result: a+1
      }) 
    }
  })
}

inc(5).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})



//const sum = function (a, b) {
 // return a + b;
//};

function sum(a,b) {
  return new Promise ((resolve, reject) => {
    if (isNaN(a,b))
    {
      reject ({
        error: ('both are not a number')
      })
    }
    else
    {  
      resolve ({
        result: a+b
      }) 
    }
  })
}

sum(5,7).then((result) => {
  console.log(result)
}).catch((error) => {
  console.error(error)
})




//const max = (a, b) => (a > b ? a : b);

const maxPromise =  new Promise ((resolve,reject) => {
  const max = (a,b) => (a>b ? a: b);

  if (max <= 0)
    reject();
  else
    resolve();

});

max=(3,8)
maxPromise.then(() => {
  console.log(max)
}).catch(() => {
  console.log("You are comparing negative numbers.")
});



//const avg = (a, b) => {
//  const s = sum(a, b);
//  return s / 2;
//};

const avgPromise =  new Promise ((resolve,reject) => {
  const s = sum(a,b);
  const avg = (a,b) => s/2;
  

  if (a <= 0 || b <= 0)
    reject();
  else
    resolve();

});

avg=(7,9)
avgPromise.then(() => {
  console.log()
}).catch(() => {
  console.log("You are comparing negative numbers.")
});



//const obj = {
 // name: "Marcus Aurelius",
 // split(sep = " ") {
 //   return this.name.split(sep);
 // },
//};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const person = Person.of("Marcus Aurelius");

//console.log("inc(5) =", inc(5));
//console.log("sum(1, 3) =", sum(1, 3));
//console.log("max(8, 6) =", max(8, 6));
//console.log("avg(8, 6) =", avg(8, 6));
//console.log("obj.split() =", obj.split());
//console.log("person.split() =", person.split());
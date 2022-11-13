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
        result:(a+1)
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

sum(5,7).then((value) => {
  console.log(value)
}).catch((error) => {
  console.error(error)
})




//const max = (a, b) => (a > b ? a : b);

function max(a,b) {
    return new Promise ((resolve, reject) => {
      if (a===b)
      {
        reject ({
          error: ('numbers are the same.')
        })
      }
      else
      {  
        resolve ({
          result: (a > b ? a : b)
        }) 
      }
    })
  }
  
  max(7,9).then((value) => {
    console.log(value)
  }).catch((error) => {
    console.error(error)
  })



//const avg = (a, b) => {
//  const s = sum(a, b);
//  return s / 2;
//};

function avg(a,b) {
    return new Promise ((resolve, reject) => {

        

      if (a+b === 0)
      {
        reject ({
          error: ('Average is zero')
        })
      }
      else
      {  
        resolve ({
          result: ((a+b)/2)
        }) 
      }
    })
  }
  
  avg(9,7).then((value) => {
    console.log(value)
  }).catch((error) => {
    console.error(error)
  });



//const obj = {
//  name: "Marcus Aurelius",
//  split(sep = " ") {
//    return this.name.split(sep);
//  },
//};



const executor = (resolve, reject) => {
    
    const obj = {
        name: "Marcus Aurelius",
        split(sep = " ") {
            return this.name.split(sep);
        },
    };
  
    if (obj.name.includes(" ")) {
      resolve();
    } else {
      reject();
    }
  };

  const promise = new Promise(executor);

promise
.then(() => console.log(obj))
.catch(() => console.log("Name doesn't have a space in it."));




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
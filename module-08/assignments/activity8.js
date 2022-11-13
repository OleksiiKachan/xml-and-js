function inc(a) {
    return a + 1;
  }
  console.log("inc(5) =", inc(5));
  const executor = (resolve, reject) => {
    // do some work
    const a= inc();
  
    if (a>=0) {
      resolve(a);
    } else {
      reject(`rejected`);
    }
  };
  const promise = new Promise(executor);
  promise
  .then((value) => console.log(value));

  console.log("---");
  function sum(a, b) {
    return a + b;
  };

  console.log("sum(1, 3) =", sum(1, 3));
  const executor1 = (resolve, reject) => {
    // do some work
    const a= sum(a,b);
  
    if (a>=0) {
      resolve(a);
    } else {
      reject(`rejected`);
    }
  };
  const promise1 = new Promise(executor1);
  promise1.then((value) => console.log(value));

  console.log("---");
  function max (a, b) {
    if(a > b ? a : b)
        return a
    else 
        return b
    };
  console.log("max(8, 6) =", max(8, 6));
  const executor2 = (resolve, reject) => {
    // do some work
    const n= max(a,b);
  
    if (n>=0) {
      resolve(n);
    } else {
      reject(`rejected`);
    }
  };
  const promise2 = new Promise(executor2);
  promise2.then((value) => console.log(value));

  console.log("---");
  function avg(a, b) {
    const s = sum(a, b);
    return s / 2;
  };
  console.log("avg(8, 6) =", avg(8, 6));
  const executor3 = (resolve, reject) => {
    // do some work
    const a= avg(a,b);
  
    if (a>=0) {
      resolve(a);
    } else {
      reject(`rejected`);
    }
  };
  const promise3 = new Promise(executor3);
  promise3.then((value) => console.log(value));

  console.log("---");
  const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return this.name.split(sep);
    },
  };
  console.log("obj.split() =", obj.split());
  const executor4 = (resolve, reject) => {
    // do some work
    const a= obj.split();
  
    if (atrue) {
      resolve(a);
    } else {
      reject(`rejected`);
    }
  };
  const promise4 = new Promise(executor4);
  promise4.then((value) => console.log(value));









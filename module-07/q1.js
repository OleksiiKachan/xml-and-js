const func1 = new Promise((resolve) => resolve(`func1`));

const func2 = new Promise((resolve) => resolve(`func2`));

const func3 = new Promise((resolve) => resolve(`func3`));

const main = () => {
    const allPromise = Promise.all([func1, func2, func3])
    allPromise.then(values => {
    
      values; // [valueOfPromise1, valueOfPromise2, ...]
    
    }).catch(error => {
    
      error;  // rejectReason of any first rejected promise
    
    });
}
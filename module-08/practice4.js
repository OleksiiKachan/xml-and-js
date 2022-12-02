var some_function = (value, value1, value2) =>{
  return new Promise(function (resolve,reject) {

    resolve(value, value1, value2);
    reject(new Error('no arguments'));
    
  });
};
console.log(some_function(1,2,3));
console.log(some_function(`janki`,2,3));
console.log(some_function());

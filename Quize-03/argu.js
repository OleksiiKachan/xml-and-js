/*Create a function that returns a promise that on resolve returns
 the array of arguments of this function. Reject if no arguments are passed
e.g.
await func(1,2,3) => should return 1,2,3
await func(`value`, 15, {}) => should return `value`, 15, {}
await func() => should throw error*/
const func2 =() => new Promise((resolve,reject)) => {
  if(arg1 && arg2 && arg3)
  {
    resolve(arg1,arg2,arg3)
  }
  else
  {
    reject('No arg')
  }
}
func().then((data) => console.log(data)).catch((error) =>console.log(error));

or ..args

const func = (arr) =>{
   return new Promise((resolve, reject) => {
      if (arr.length > 0) {
        resolve(arr);
      } 
      else 
      {
        reject("No arguments");
      }
  });
}


/*
arr=[5,2,3]
 func(arr, arr).then(console.log).catch(console.log);
 arr=[`value`, 13,{}]
func(arr).then(console.log).catch(console.log);
arr=[]
 func(arr).then(console.log).catch(console.log);
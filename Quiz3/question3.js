//Create a function that returns a promise that on resolve returns the array of arguments of this function. Reject if no arguments are passed

// e.g.

// await func(1,2,3) => should return 1,2,3

// await func(`value`, 15, {}) => should return `value`, 15, {}

// await func() => should throw error

// const timeout = (ms = 1500) => new Promise(resolve => setTimeout(resolve,ms));

const returnValues = function (args) {
  return new Promise (function (resolve, reject) {
    setTimeout(() => {
      if (args.length === 3) {
        resolve (args)
      } else {
        reject ("No arguments passed or the number of arguments is not 3")
      }
    }, 1000)

  })
}

function onSuccess(data){
    console.log(`Success ${data}`)
}

function onError(error){
    console.log(`Error: ${error}`)
}

returnValues([`value`, 15, `{}`, 4])
  .then(onSuccess)
  .catch(onError)
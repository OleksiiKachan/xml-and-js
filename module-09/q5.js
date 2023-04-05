function func(...args) { //function func accepts any no. of arguments and store it in args
    return new Promise((resolve,reject) => { //creates new promise that has 2 arguments resolve and reject
        if(args.length === 0) {//checks wether any arguments were passed to the func unction. If not it is rejected else resolved
            reject("Error!! No arguments passed.");
        }
        else
        {
            resolve(args);//resolved with args array
        }
    });
}

func(1,2,3) //calls func with 3 arguments
.then((output) => console.log(output))//then is called on the returned promise which logs the args array
.catch((error) => console.error(error));//if rejected catch method is called

func("value", 15, {})
.then((output) => console.log(output))
.catch((error) => console.error(error));

func() //no arguments
.then((output) => console.log(output)) //am empty array
.catch((error) => console.error(error));

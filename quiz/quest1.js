const arrayArg= () => {
    return new Promise((resolve, reject) => {
        if(arguments.length)
        {
            resolve([...arguments])
        }
        reject("Rejected: No Arguments provided")
    })
}

arrayArg().then(data => console.log(data)).catch(e => console.log(e));
arrayArg('value',15,{}, [1,2,3]).then(data => console.log(data)).catch(e => console.log(e));
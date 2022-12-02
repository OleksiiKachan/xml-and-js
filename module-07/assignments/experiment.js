new Promise((resolve, reject) => {

    resolve('Success!')
    
    })
    
    .then(() => {
    
    throw Error('Oh no!')
    
    })
    
    .catch(error => {
    
    return "actually, that worked"
    
    })
    
    .catch(error => console.log(error.message))
const p = new Promise((resolve, reject) => {

    resolve({ message: 'this is error!'})
    
    })
    
    p.then(error => console.log(error.message))
    
    p.catch(error => console.log(error.message))
    
    


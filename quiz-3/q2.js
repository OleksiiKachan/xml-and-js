const func = (a,b,c) =>{
    
    const executor = (resolve, reject) => {
        const check = false;
        
        if (a != null && b != null & c !=null){
            check = true;
        }
    
        if (check) {
          resolve(`successful`);
        } else {
          reject(`rejected`);
        }
      };
    
      const promise = new Promise(executor);
      
      promise
        .then((value) => console.log(value))
        .catch((error) => console.error(error));

}

func(1,2,3);


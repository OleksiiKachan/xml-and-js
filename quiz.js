function func(){
    if(arguments.length > 0){
      return Promise.resolve(arguments);  
    }  
    else{  
      return Promise.reject("No arguments passed");  
    }  
  }
  
func().catch(result => console.log(result));
func(1,2,3).then((value) => {  
    for(let i = 0; i < value.length ; i++){  
      console.log(value[i]);  
    }  
  });
  
func('java', 20, {}).then((value) => {  
    for(let i = 0; i < value.length ; i++){  
      console.log(value[i]);  
    }  
  });
const timeout = (ms,callback)=>{
    return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
          callback();
        }, ms);
      });
}

const main =async() =>{
    try{
        checkIfExists(filename);
    checkIfFile(filename);
    const data=readFile(filename);
    console.log(data);
    }catch(error){
        console.error.error;
    }
}

main();
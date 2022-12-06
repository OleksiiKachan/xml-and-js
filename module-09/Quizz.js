
const fun = async function (value, value2, value3) {
    
    new Promise((resolve, reject) => {


        if(value!= undefined && value2!=undefined && value3!=undefined)
        {
            resolve (value, value2, value3);
            console.log(value);
            console.log(value2);
            console.log(value3);
            
            
        }
        else{
            reject("Error");
        }
      });
}
  
main = (async () => {
console.log("await fun(3,5) =", await fun(1, 3, 5));
})

main();


const fun = async function (val1, val2, val3) {
    
    new Promise((resolve, reject) => {

        if(val1== undefined && val2==undefined && val3==undefined)
        {
  
            reject("Error");

        }
        else{

            resolve (val1, val2, val3);
            console.log("Value1 is: "+val1);
            console.log("value2 is: "+val2);
            console.log("value3 is: " +val3);
        }
      });
}
  
data = (async () => {
console.log("await function(1, 2,3) =", await fun(1,2,3));
})

data();
/*data1 = (async () => {
    console.log("await function(`value`, 15,{}) =", await fun(`value`,15,{}));
    })
data1();*/





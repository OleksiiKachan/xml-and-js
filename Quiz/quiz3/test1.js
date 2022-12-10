const v = async function (a, b, c) {
    
    new Promise((resolve, reject) => {


        if(a > 0 && b > 0 && c > 0)
        {
            resolve (a, b, c);    
            console.log(a,b,c);       
        }
        else{
            reject("Error");
        }
      });
}
main = (async () => {
    console.log(v(1,2,3));
})

main();
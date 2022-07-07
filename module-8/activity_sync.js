function inc(a) {
    return new Promise((resolve, reject) => {

     

      const check = true;
      // Succeed half of the time.
      if (true) {
        const b=a+1
        console.log("It is done.");
            resolve(b+" SUCCESS")
      } else {
        reject("FAILURE")
      }
    })
  }
  

 console.log("inc(5) =", inc(5));


 function sum(a,b) {
    return new Promise((resolve, reject) => {
      console.log("Sum is done.");

      const check = true;
    
      if (true) {
            resolve(a+b + " SUCCESS")
      } else {
        reject("FAILURE")
      }
    })
  }

  console.log("sum(1, 3) =", sum(1, 3));
  

  

  function max(a,b) {
    return new Promise((resolve, reject) => {
      console.log("Max is done.");

      const check = true;
    
      if (true) {
            resolve((a > b ? a : b),(a,b) + " SUCCESS")
      } else {
        reject("FAILURE")
      }
    })
  }
  console.log("max(8, 6) =", max(8, 6));


  function avg(a,b){

    return new Promise((resolve, reject) => {
        console.log("Avg is done.");
  
        const check = true;
      
        if (true) {
                 const avg = (a, b) => {
                const s = sum(a, b);return s / 2;
                        

              resolve( avg + " SUCCESS") };
        } else {
          reject("FAILURE")
        }
      })
  }

 
  console.log("avg(8, 6) =", avg(8, 6));


  function obj(){

    return new Promise((resolve, reject) => {
        console.log("It is done.");
  
        const check = true;
        // Succeed half of the time.
        if (true) { 
            const obj = {
                name: "Marcus Aurelius",
                split(sep = " ") {
                  return this.name.split(sep);
                },
              };
        } else {
          reject("FAILURE")
        }
      })
    }

    console.log("Marcus Aurelius",obj())

    class Person {
      
      
        static of(name) {
          return new Person(name);
        }
      
        constructor (name){

          function obj1(){
          return new Promise((resolve, reject) => {
              console.log("It is done.");
        
              const check = true;
              // Succeed half of the time.
              if (true) { 
                      const obj = {
                      name: "Marcus Aurelius",
                      split(sep = " ") {
                        return this.name.split(sep)
                      resolve()
                      
                      
                      }
                    };
              } else {
                reject("FAILURE")
              }
            })
        
            console.log(""+obj);
        
          }
       
          console.log(obj1());
       
        }
       
    }  
        
    

//  constructor(name) {
//  this.name = name;
//}



    
      
   
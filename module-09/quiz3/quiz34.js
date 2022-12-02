/**
 * await func(1,2,3) => should return 1,2,3
 */
async function func(a,b,c) {
    const a = await 1;
    console.log(a,b,c); 
  
    const obj = {};
    console.log((await obj) === obj); // true
  }
  
  func(a,b,c);
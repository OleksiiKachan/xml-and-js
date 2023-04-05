function func(...args) {
    return new Promise((resolve, reject) => { 
     if (args.length > 0) { 
      resolve(args); 
    } else { 
      reject('No arguments are passed');
    } 
   });
}
  
(async () => { 
    try { 
     const result = await func(1, 2, 3); 
     console.log(result); 
   } catch (error) { 
     console.log(error); 
   } 
  })();
 
   
 
(async () => { 
    try { 
     const result = await func("value", {}, 15); 
     console.log(result); 
   } catch (error) { 
     console.log(error); 
   } 
  })();
 
    
(async () => { 
    try { 
     const result = await func(); 
     console.log(result);  
   } catch (error) { 
     console.log(error);
   } 
  })();


function func(...args) {
    return new Promise((resolve, reject) => { 
     if (args.length > 0) { 
      resolve(args); 
    } else { 
      reject(new Error('No arguments were passed')); 
    } 
   });
}
  
(async () => { 
    try { 
     const res = await func(1, 2, 3); 
     console.log(res); 
   } catch (error) { 
     console.log(error); 
   } 
  })();
 
   
 
(async () => { 
    try { 
     const rest = await func("value", 15, {}); 
     console.log(rest); 
   } catch (error) { 
     console.log(error); 
   } 
  })();
 
    
(async () => { 
    try { 
     const ans = await func(); 
     console.log(ans); 
   } catch (error) { 
     console.log(error);
   } 
  })();



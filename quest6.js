function func(...args) {
    return new Promise((resolve, reject) => {
      if (args.length > 0) {
        resolve(args);
      } else {
        reject(new Error("No arguments are passed"));
      }
    });
  }

(async () => {
    try {
      const func1 = await func(1, 2, 3);
      console.log(func1); 
    } catch (error) {
      console.error(error); 
    }
})();
  
(async () => {
    try {
      const func2 = await func('value', 15, {});
      console.log(func2); 
    } catch (error) {
      console.error(error); 
    }
})();
  
(async () => {
    try {
      const func3 = await func();
      console.log(func3); 
    } catch (error) {
      console.error(error); 
    }
})();
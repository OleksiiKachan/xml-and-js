   // Question 8 
   function Question8(...arguments) {
    return new Promise((resolve, reject) => {
      if (arguments.length > 0) {
        resolve(arguments);
      } else {
        reject('No arguments passed!');
      }
    });
  }

  async function Data() {
    try {
      const result = await Question8(1,2,3);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  Data();
  


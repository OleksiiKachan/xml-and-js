function ques6(...parameters) 
{
  return new Promise((resolve, reject) => {
      if (parameters.length > 0) {
        resolve(parameters);
      } else {
        reject('No arguments passed!');
      }
    });
  }

(async () => {
    try {
      const data = await ques6(1, 2, 3);
      console.log(data); 
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await ques6('value', 15, {});
      console.log(data); 
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await ques6();
      console.log(data); 
    } catch (error) {
      console.log(error);
    }
})();
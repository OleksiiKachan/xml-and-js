
// Question 6 
const func1 =()=> new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));

const Question6 = async () => {
  const data = await Promise.all([func1(), func2, func3]);
  console.log(data);
};

Question6();


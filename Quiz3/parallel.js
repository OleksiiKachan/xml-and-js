const func1 = () => Promise.resolve(`func1`);
const func2 = () => Promise.resolve(`func2`);
const func3 = () => Promise.resolve(`func3`);


const main = async () => {
  const [res1, res2, res3] = await Promise.all([func1(), func2(), func3()]);
  const output = `${res1}, ${res2}, ${res3}`;
  console.log(output);
}
main();
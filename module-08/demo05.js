// 改写未异步
const timeout = (ms = 1500) => new Promise();

async function inc(a) {
  await timeout();
  return a + 1;
  // 等价于
//   return timeout().then(() => a + 1);
}

//   async const sum = function (a, b) {
//     await timeout();
//     return a + b;
//   };

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return this.name.split(sep);
  },
};

//   对象的构建函数不能是async
class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    return new Person(name);
  }

  async split(sep = " ") {
    return this.name.split(sep);
  }
}

async () => {
  const person = await Person.of("Marcus Aurelius");

  console.log("inc(5) =", await inc(5));
  console.log("sum(1, 3) =", await sum(1, 3));
  console.log("max(8, 6) =", await max(8, 6));
  console.log("avg(8, 6) =", await avg(8, 6));
  console.log("obj.split() =", await obj.split());
  console.log("person.split() =", await person.split());
};

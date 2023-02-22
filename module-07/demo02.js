const pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    },
  ];


  
const { rebels, empire } = pilots.reduce(       //声明一个常量字典,包括两个key, 即同时声明两个常量
    (accum, pilot) => {                         //该处accum是accumulator, 用于存放过往的累计值;
                                                //pilot指代本次迭代的对象,pilot的命名可以是任意;
                                                //由于每次迭代都是{}类型,所以pilot本质上是字典
      if (pilot.faction === "Rebels") {         
        accum.rebels.push(pilot);               //根据条件,将数据加入rebel数组,注意该处之所以是.rebels是常量的声明是一个字典,rebel是一个key;
      } else if (pilot.faction === "Empire") {
        accum.empire.push(pilot);
      }
  
      return accum;                             //将accumulator返回到下一个迭代
    },
    { rebels: [], empire: [] }                  //initialValue, 可以理解为
  );
  
  console.log(rebels);                          //将常量输出
  console.log(empire);
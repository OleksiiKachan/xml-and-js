// const promise = new Promise(resolve => setTimeout (() =>resolve (`xx`), 100));

// promise.then(result => {
//   return result == `Alan` ? Promise.resolve("Hey Alan?") : Promise.reject("How are u?")
//   .then(
//     (res) => {console.log(res)}, 
//     (err) => {console.log(err)}
//     );
// });




// const promise2 = new Promise(resolve => {setTimeout(() => resolve("cc"),20)} ) //pormise2 de 20 milisaniye sonra yy dön.

//  promise2.then(res => {
//    return res == "yy" ? Promise.resolve("cevap yy") : Promise.reject("reject edldi") //promise cevaplarını ayaraladım
//  .then((response) => console.log(response),
//        (reject) => console.log(reject));

//  })

// const promise3 = new Promise (resolve => { resolve("xx")});

// promise3.then((res) =>{

//   return res=="deneme" ? Promise.resolve("cevabi yakaladim") : Promise.reject("cevabi yakalayamadim").then
//   ((response)=> console.log(response),
//   (reject) => console.log(reject));

// });


// function doubleResult(num1, num2, calc) {
//   return calc(num1, num2) * 2;
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(doubleResult(4, 2, add));
// console.log(doubleResult(4, 2, multiply));

// const array1 =[
//   {key:1, value:10},
//   {key:2, value:20},
//   {key:3, value:30},
// ]

// console.log(array1);
// console.log(array1.map(({key,value}) => ({[key]: value}))) ;

// const arrayLike = {
//   length: 3,
//   0: 2,
//   1: 3,
//   2: 4,
// };

// const array2 = Array.prototype.map.call(arrayLike, num => num**2);

// console.log(array2);

// const array1 = [1, ,3];

// const a = (array1.map((x, index) => {
//   console.log(`visit : ${index}`)
//   return x*2;
// })
// );

// console.log(a);

// const num = [1,2,3,4]

// const num2 = num.map((x,index) =>{
//   if(index<3) return x;
// })

// console.log(num2);


// function iterationCal(min=0, max=Infinity, step=0){
// let number= min;
// let count = 0;

// const iteration = {
// next: function(){

//   if(number<max){
//   let result = {value:number, done:false};
//   number+=step;
//   count++;
//   return result;
//   }

//   return {value:count, done:true};

// },
// };

// return iteration;
// } 

// const useCase = iterationCal(10,8,1);

// let result = useCase.next();


// while(!result.done){
//   console.log(result.value);
//   result = useCase.next();
// };



function createRangeIterator(min = 0, max = Infinity, step = 1) {
  let nextNum = min;
  let numCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextNum < max) {
        result = { value: nextNum, done: false };
        nextNum += step;
        numCount++;
        return result;
      }
      return { value: numCount, done: true };
    },
  };

  return rangeIterator;
}

const useCase = createRangeIterator(10, 8, 2);

let result = useCase.next();

while (!result.done) {
  console.log(result.value);
  result = useCase.next();
}
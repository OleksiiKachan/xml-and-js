//Map her zaman array döner bunu unutma---------------//


const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

console.log(`Source:`);  /// Bunu yazamazsan terminale bişey yazmıyor, bu başlangıç komutu unutma
console.log(officers);

console.log(`-----------`);
console.log(`forEach`);
console.log(`-----------`);

const officersIds_1 = [];
officers.forEach((officer) => {   //Foreach ile arrayin içinde her elemanın ID sini aldık, 
officersIds_1.push(officer.id);   //Bunu yaparken önce boş array tanımladık, sonra her elemanın içine girip
});                               //is sini alıp boş arraya ekledik

console.log(officersIds_1);

console.log(`-----------`);
console.log(`map`);
console.log(`-----------`);

const officersIds_2 = officers.map((officer) => {  //map ile yaparken aynı işlemi direkt array olarak istediğimizi 
  return officer.id;                              // alabiliyoruz.officers arrayinin mapini çıkardıp sadece İD lerden yeni
});                                               //array yaratabiliyoruz, ama return kullanmayı unutma.

console.log(officersIds_2);

// const officersIds_3 = officers.map((officer) => officer.id);

// console.log(officersIds_3);

// const officersIds_4 = officers.map(({ id }) => id);

// console.log(officersIds_4);

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.map((number) => {  //numbers arrayinin içinden tek sayıların mapini çıakrtıp
  return number % 2 === 0;                      //yeni array oluşturduk. return yazmayı unutma.
});


//Map her zaman array döner bunu unutma---------------//
//cd module-07   hangi klasördesin
//node map.js  hangi dosyayı çalıştırmak istiyorsun
//console.log(`Source:`); yazmazsan console.log çalışmıyor. bunu en başa yazmayı unutma.
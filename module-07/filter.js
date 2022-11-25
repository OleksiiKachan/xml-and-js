//Filter her zaman array döner---------------------//

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

console.log(`Source:`);
console.log(pilots);

const empire = pilots
.filter((pilot) => pilot.faction === "Empire")
.map((pilot) =>pilot.name); // burada  şunuda yazabilrdik .map(({name}) =>name). burada {} anlamı name field kendisi.
                            //önce pilotları içinde factionları Empire olanları filitreledik elimizde yine array kaldı
console.log(empire);empire  //elimizde kalan arrayin içinde pilotların bütün özellikleri yazıyor ama biz sadecec isimlerini
                            // almak istiyoruz o zaman, yeni oluşan arrayi maplerin ve sadece isimlerini alırız.

//Filter her zaman array döner---------------------//
//cd module-07   hangi klasördesin
//node filter.js  hangi dosyayı çalıştırmak istiyorsun

const empire2 = pilots.filter((pilot) => pilot.faction === "Empire");

console.log(empire2);
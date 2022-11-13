const fs = require("fs");  //file ulaşmak için başlangıç
let filename = `${__dirname}/books.json`; //file lokasyonu

const checkIfExists = (filename) => //filename içine alan promise yazıyoruz
  new Promise((resolve, reject) => {
    fs.exists(filename, (exists) => {  //fs varsa filename cevap olarak dön
      if (exists) {
        resolve(filename);
      } else {
        reject("404: file not found");  // fs yoksa 404 hatası fırlat
      }
    });
  });

const checkIfFile = (filename) =>       //file mi kontrol ediyoruz
  new Promise((resolve, reject) => {    // kontrol ederken promise yazıyoruz
    fs.stat(filename, (err, stats) => { //dosyanın detaylarını iste
      if (err) {                        // hafat varsa hata fırlat
        reject(err);
      }
      if (stats.isFile()) {             // bir dosya ise dosyayı dön
        resolve(filename);
      } else {
        reject("This location contains not a file"); //dosya değil ise hata fırlat
      }
    });
  });

const readFile = (filename) =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, null, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(JSON.parse(data));
    });
  });

const safeReadFile = (filename) =>
  checkIfExists(filename).then(checkIfFile).then(readFile);

safeReadFile(filename).then(console.log).catch(console.error);

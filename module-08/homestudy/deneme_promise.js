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
      if (err) {                        // hata varsa hata fırlat
        reject(err);
      }
      if (stats.isFile()) {             // bir dosya ise dosyayı dön
        resolve(filename);
      } else {
        reject("This location contains not a file"); //dosya değil ise hata fırlat
      }
    });
  });

const readFile = (filename) => //dosyayı okumak için ynei pormise yarat
  new Promise((resolve, reject) => {
    fs.readFile(filename, null, (err, data) => { //dosya okurken hata varsa
      if (err) {                                    // hata fırlat
        reject(err);
      }

      resolve(JSON.parse(data));                // hata yoksa datayı parse et ve dön
    });
  });

const safeReadFile = (filename) =>
  checkIfExists(filename).then(checkIfFile).then(readFile);

safeReadFile(filename).then(console.log).catch(console.error);

const fs = require("fs"); // file ulaşmak için başlangıç bu
let filename = `${__dirname}/books.json`; //file lokasyonu

fs.exists(filename, (exists) => { // eğer fs ulaşırsan devam et
                                    // fs ulaşamazsan 404 hatası ver
  if (exists) {
    fs.stat(filename, (err, stats) => { // fs ye ulaştığında stat yap.
                                        //stat dosyanın detaylarını istemek demek
                    if (err) {                  //stat yaparken hata alırsan hata fırlat
                        throw err;              //stat da hata yoksa STATS yarat
                    }
                    
                    
                    if (stats.isFile()) {       // //stats eğer bir dosya ise dosyayı oku
                        fs.readFile(filename, null, (err, data) => { // dosyayı okurken hata alırsan hata fırlat
                        if (err) {                                      // data oluştur
                            throw err;
                        }
                        console.log(JSON.parse(data));              //dosyayı okurken hata yoksa 
                                                                    //datayı parse ve panele yazdır
                        });
                    } 
                    
                    else 
                    {
                        throw new Error("This location contains not a file"); // stats bir dosya değil ise
                    }                                                        // hata fırlat "not contain file yazdır"
                    
            });
        } 
  
  
  else 
  {
    throw new Error("404: file not found");
  }
});


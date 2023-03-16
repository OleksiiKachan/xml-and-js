const fs = require("fs"); 

const filename = `${__dirname}/books.json`; 

fs.exists(filename, (exists) => {
  if (exists) {
    fs.stat(filename, (err, stats) => {
      if (error) {
        throw new Error(err);
      }

      if (stats.isFile()) {
        fs.readFile(filename, null, (err, data) => {
          if (err) {
            throw new Error(err);
          }

          console.log(JSON.parse(data));
        });
      } else {
        throw new Error("not a file");
      }
    });
  } else {
    throw new Error("404 ");
  }
});
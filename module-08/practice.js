const fs = require("fs"); //相当于import

const filename = `${__dirname}/books.json`; //绝对路径

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
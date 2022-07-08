const fs=require("fs");
const filename= `${__dirname}/books.json`;

fs.exists(filename,(exists) =>{
    if(exists){
        fs.stat(filename, (err,stats) =>{
            if(err){
                throw err;
            }

            if(stats.isFile()){
                fs.readFile(filename,null,(err,data) =>{
                    if(err){
                        throw err;
                    }

                    console.log(JSON.parse(data));
                });
            }else{
                throw new Error(`THIS IS NOT A FILE!!!`);
            }
        });
    }else{
        throw new Error(`404 : FILE NOT FOUND`);
    }
});
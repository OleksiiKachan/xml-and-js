const func = (args) => {
  new Promise((resolve, reject) => {
    if(args.length > 0) {
        resolve(args);
    } else {
        reject(new Error('No arguments provided'));
    }
  });
}



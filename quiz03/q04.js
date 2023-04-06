// const xFunc = () =>
  new Promise((resolve, reject) => {
    resolve("Success!");
  })
    .then(() => {
      throw Error("Oh no!");
    })
    .catch((error) => {
      console.log("error1:");
      return "actually, that worked";
    })
    .catch((error) => {
      console.log("error2:");
      console.log(error.message);
    });

// xFunc();

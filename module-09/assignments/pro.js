const fun = async function (v1, v2, v3) {
    new Promise((resolve, reject) => {
        if (v1 != undefined && v2 != undefined && v3 != undefined) {
            resolve(v1, v2, v3);
            console.log(v1);
            console.log(v2);
            console.log(v3);
        }
        else {
            reject("Error");
        }
    });
}
main = (async () => {
    console.log("await fun(1, 2,3) =", await fun({}, 3, 5));
})
main();
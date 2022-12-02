const func = (a, b, c) => {
    new Promise((resolve, reject)=>{

        if (a != null || b != null || c !=null){
            resolve(console.log(a,b,c));
        }else{
            reject(`rejected`);}

    }).catch((error) => console.error(error));

}

const main = async() => {

    await func(1,2,3);

    await func(`value`, 15, {});

    await func();

}

main();
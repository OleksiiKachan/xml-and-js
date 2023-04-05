const { error } = require("console");

const func = async(input) =>{
    const data = await input.length
    if(data > 0){
        return input
    }else{
        return(error)
    }
};


    const main =async()=>{
        const input = [`value`, 15, {}]
        // const input = [1,2,3]
        // const input = []
        const print = await func(input);
        console.log(print)
    };

    main();



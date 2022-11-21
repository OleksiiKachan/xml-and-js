// let merhaba = function(){
//     console.log("it is a callback");
// }

// setTimeout(merhaba,3000);
// console.log("without having callback");
//---------------------------------------------------------------------
// I will try to write anonynous function;

// setTimeout(function(){
//     console.log("it is a anonynous function")
// }, 3000);

// console.log("it is just a console.log");
//------------------------------------------------------------------------
// function firstFunction(){

//     setTimeout(function(){
//         console.log("first function 3000ms")

//     },3000);
// }


// function secondFunction(){
//     console.log("second function")
// }

// firstFunction();
// secondFunction();

//I write just function now I will add callback---------------------------

function firstFunction(callback){

    setTimeout(function(){
        console.log("first function 3000ms")
        callback();

    },3000);
}


function secondFunction(){
    setTimeout(function(){
        console.log("second function")

    },2000)
    
}


firstFunction();
secondFunction();








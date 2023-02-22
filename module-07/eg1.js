const add =(arg) => {
    arg(); //invoke
    console.log(`hof`)
}

hof (() => {
    console.log(`arg`)
});
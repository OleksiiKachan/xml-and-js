let qs = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () =>{
    qs("h2").style.display = "none";

    qs("button").addEventListener("click", ()=>{
        qs("h2").style.display = "block";
    })
})
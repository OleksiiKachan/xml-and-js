let qs = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded",()=>{
    qs("button").addEventListener("click", ()=>{
        console.log("Your email is: " + qs("#email").value);
        console.log("Your date of visit is" + qs("#date").value);
        console.log("Your comment is: " + qs("#textbox").value)
    })
})
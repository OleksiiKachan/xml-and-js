let email = document.querySelector("#email")
let date = document.querySelector("#date")
let comment = document.querySelector("#comment")
let submit = document.querySelector("#submit")


submit.addEventListener("click", ()=>{
    console.log(email.value)
    console.log(date.value)
    console.log(comment.value)
})
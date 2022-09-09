document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector('#submit')

  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.querySelector('#email')
    const dateOfVisit = document.querySelector('#dateOfVisit')
    const comment = document.querySelector('#comment')
    const spanEmailError = document.querySelector('#emailError')

    if (email.value.trim() === '') {
      spanEmailError.textContent = "Email cannot be empty."
      spanEmailError.style.color = 'red'
      return
    } else {
      spanEmailError.textContent = ""
    }

    console.log("Email: ", email.value)
    console.log("Date of visit: ", dateOfVisit.value)
    console.log("Your Comment: ", comment.value)
  })

})
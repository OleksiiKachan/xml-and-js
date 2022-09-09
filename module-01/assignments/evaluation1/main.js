document.addEventListener('DOMContentLoaded', () => {

  const btnDisplayName = document.querySelector('#btnName')
  
  const paraName = document.querySelector('#name')

  btnDisplayName.addEventListener('click', (event) => {
    paraName.textContent = "Santosh Dhakal"
  })
})
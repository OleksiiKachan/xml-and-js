const main_async = async () => {
  const result = await fetch('people.xml')
  const data = await result.text()

  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(data, "text/xml")

  display(xmlDoc)
}

const main_promise = async () => {
  fetch('people.xml')
  .then((result) => result.text())
  .then((data) => {
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(data, "text/xml")
      display(xmlDoc)
  })
}

const display = (xmlNode) => {
  const persons = xmlNode.getElementsByTagName('person')
  console.log(persons)

  for (let i = 0; i < persons.length; i++) {
    const person = persons[i]
    
    const id = person.getElementsByTagName("id")[0].childNodes[0].nodeValue
    const firstName = person.getElementsByTagName("first_name")[0].childNodes[0].nodeValue
    const lastname = person.getElementsByTagName("last_name")[0].childNodes[0].nodeValue
    const email = person.getElementsByTagName("email")[0].childNodes[0].nodeValue
    const gender = person.getElementsByTagName("gender")[0].childNodes[0].nodeValue
    const ipaddress = person.getElementsByTagName("ip_address")[0].childNodes[0].nodeValue

    const prettyList = document.getElementById('prettyList')

    const templateString = `<div>
                              <p class="fullName">${firstName} ${lastname}</p>
                              <p>Gender: ${gender}, id: ${id}</p>
                              <p>${email}</p>
                              <p>${ipaddress}</p>
                            </div>`

    const temp = document.createElement('p')
    temp.innerHTML = templateString
    
    prettyList.append(temp.firstChild)
  }
}

//main_async()
main_promise()

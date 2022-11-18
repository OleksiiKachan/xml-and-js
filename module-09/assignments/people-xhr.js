const xhr = (url, method = 'GET') => {
  return new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseXML)
        }
      };
    xhttp.open(method, url, true);
    xhttp.send();
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

xhr('people.xml').then(value => display(value))

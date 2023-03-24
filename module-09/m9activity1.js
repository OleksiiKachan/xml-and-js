const xhr = (url, method = `GET`) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseXML);
      }
    };
    xhttp.open(method, url);
    xhttp.send();
  });
  
  function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  
  function createPerson(person) {
    const content = `<li>
    <article>
      <p>${perosn.firstname}</p>
      <h2>${person.lastname}</h2>
      <div>
        ${person.gender} ${person.email} ${person.ipaddress}
      </div>
    </article>
  </li>`;
  
    return stringToNode(content);
  }

  function parseCard(xml) {
    const firstname = xml.getElementsByTagName(`firstname`)[0].childNodes[0].nodeValue;
    const lastname = xml.getElementsByTagName(`lastname`)[0].childNodes[0].nodeValue;
    const gender =
      xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
    const email =
      xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;

      const ipaddress =
      xml.getElementsByTagName(`ipaddress`)[0].childNodes[0].nodeValue;
  
    return {
      firstname,
      lastname,
      gender,
      email,
      ipaddress,
    };
  }

  function displayData(xmlDoc) {
    const persons = xmlDoc.getElementsByTagName(`record`);
  
    const list = document.getElementById(`cards`);
  
    for (let index = 0; index < persons.length; index++) {
      const element = persons[index];
      const parsedPerson = parsePerson(element);
  
      const personElement = createPerson(parsedPerson);
      list.appendChild(personElement);
    }
  }
  
  xhr("people.xml").then(displayData);

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

function createPeople(people) {
  const content = `<li>
  <article>
    <p>${people.id}</p>
    <h2>${people.first_name}</h2>
    <h2>${people.last_name}</h2>
    <h2>${people.email}</h2>
    <h2>${people.gender}</h2>
    <h2>${people.ip_address}</h2>
    <div>
      ${people.first_name} ${people.last_name}
    </div>
  </article>
</li>`;

  return stringToNode(content);
}

function parsePeople(xml) {
  const id = xml.getElementsByTagName(`id`)[0].childNodes[0].nodeValue;
  const first_name = xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
  const last_name =
    xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
  const email =
    xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
  const gender =
    xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
  const ip_address =
    xml.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue;


  return {
    id,
    first_name,
    last_name,
    email,
    gender,
    ip_address
  };
}

function displayData(xmlDoc) {
  const person = xmlDoc.getElementsByTagName(`people`);

  const list = document.getElementById(`person`);

  for (let index = 0; index < person.length; index++) {
    const element = person[index];
    const parsedPeople = parsePeople(element);

    const cardElement = createPeople(parsedPeople);
    list.appendChild(PeopleElement);
  }
}

xhr("people.xml").then(displayData);

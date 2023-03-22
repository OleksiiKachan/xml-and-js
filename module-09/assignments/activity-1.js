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
    <p>${people.fname}</p>
    <p>${people.lname}</p>
    <p>${people.email}</p>
    <p>${people.gender}</p>
    <p>${people.ip}</p>
  </article>
</li>`;

  return stringToNode(content);
}

function parseCard(xml) {
  const id =
    xml.getElementsByTagName(`id`)[0].childNodes[0].nodeValue;
  const fname =
    xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
  const lname =
    xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
  const email =
    xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
  const gender =
    xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
  const ip =
    xml.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue;


  return {
    id,
    fname,
    lname,
    email,
    gender,
    ip,
  };
}

function displayData(xmlDoc) {
    const peoples = xmlDoc.getElementsByTagName(`row`);

    const list = document.getElementById(`peoples`);

    for (let index = 0; index < peoples.length; index++) {
      const element = peoples[index];
      const parse_People = parsePeople(element);

      const peopleElement = createPeople(parse_People);
      list.appendChild(peopleElement);
    }
  }

xhr("people.xml").then(displayData);

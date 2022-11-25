fetch("people.xml")
  .then((result) => result.text())
  .then((data) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    displayData(xmlDoc);
  });
function stringToNode(html) {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function displayData(xmlDoc) {
  const listElement = document.getElementById(`people`);

  const PeopleNodes = xmlDoc.getElementsByTagName(`person_info`);
  for (let index = 0; index < PeopleNodes.length; index++) {
    const PeopleNode = PeopleNodes[index];
    const listItem = stringToNode(`<li>
            <h2>${`First name:-${
              PeopleNode.getElementsByTagName(`first_name`)[0].childNodes[0]
                .nodeValue
            }`} ${
      PeopleNode.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue
    }</h2>
          <p>${`Email:- ${
            PeopleNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue
          }`}</p>
          <p>${`Gender:- ${
            PeopleNode.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue
          }`}</p>
          <p>${`IP: ${
            PeopleNode.getElementsByTagName(`ip_address`)[0].childNodes[0]
              .nodeValue
          }`}</p>
          </li>`);
    listElement.appendChild(listItem);
  }
}
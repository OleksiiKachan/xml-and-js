const xhr = (url, method = "GET") =>
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
        PeopleNode.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue
      }`}</p>
      </li>`);
    listElement.appendChild(listItem);
  }
}
xhr("people.xml").then(displayData);
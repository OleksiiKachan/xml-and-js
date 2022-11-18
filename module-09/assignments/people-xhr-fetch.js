const xhr = (url, method='GET') => 
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

  function stringToNode(html){
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  function displayData(xmlDoc){
    const listElement = document.getElementById(`people`);

    const PersonInfoNodes = xmlDoc.getElementsByTagName(`PersonInfo`);
    for (let index = 0; index < PersonInfoNodes.length; index++) {
    const PersonInfoNode = PersonInfoNodes[index];
    const listItem = stringToNode(`<li>
        <h2>${`Name: ${
            PersonInfoNode.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue
        }`} ${
            PersonInfoNode.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue
        }</h2>

    <p>${`Email: ${
        PersonInfoNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue
    }`}</p>

    <p></p>

    <p>${`Gender: ${
            PersonInfoNode.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue
    }`}</p>

    <p>${`IP Addres: ${
            PersonInfoNode.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue
    }`}</p>
    </li>`);
    listElement.appendChild(listItem);
    }
}

  xhr("people.xml").then(displayData);

const main = async () => {

    const result = await fetch("people.xml");
    const data = await result.text();
    
    fetch("people.xml")
    .then((result) => result.text())
    .then((data) => displayData(data))
  
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml")
    displayData(xmlDoc);
  }

  main();
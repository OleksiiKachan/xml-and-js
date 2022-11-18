const xhr = (url, method = "GET") => {
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this);
      }
    };
    xhttp.open(method, url, true);
    xhttp.send();
  })

}

function stringToNode(html) {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function displayData(xmlDoc) {
  const listElement = document.getElementById(`people`);

  const personNodes = xmlDoc.getElementsByTagName(`row`);
  for (let index = 0; index < personNodes.length; index++) {
    const personNode = personNodes[index];
    const listItem = stringToNode(
      `<tr>
              <td>${personNode.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue}</td>
              <td>${personNode.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue}</td>
              <td>${personNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue}</td>
              <td>${personNode.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue}</td>
              <td>${personNode.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue}</td>
            </tr>`);
    listElement.appendChild(listItem);
  }
}

const main = async () => {
  const response = await fetch("people.xml");
  const str = await response.text();
  const xmlData = new DOMParser().parseFromString(str, "text/xml");
  displayData(xmlData);
};

main();

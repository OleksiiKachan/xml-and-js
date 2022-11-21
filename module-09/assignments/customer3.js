fetch("customers.xml")
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
  const listElement = document.getElementById(`customers`);

  const CustomerNodes = xmlDoc.getElementsByTagName(`customer`);
  for (let index = 0; index < CustomerNodes.length; index++) {
    const CustomerNode = CustomerNodes[index];
    const listItem = stringToNode(`<li>
          <h2>${`First name:-${
            CustomerNode.getElementsByTagName(`name`)[0].childNodes[0].nodeValue
          }`} </h2>
        <p>${`Address:- ${
          CustomerNode.getElementsByTagName(`address`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        <p>${`Phone:- ${
          CustomerNode.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue
        }`}</p>
        
        <p>${`Email: ${
          CustomerNode.getElementsByTagName(`email`)[0] != null
            ? CustomerNode.getElementsByTagName(`email`)[0].childNodes[0]
                .nodeValue
            : "Email not given"
        }`}</p>
        <p>${`Order Date: ${
          CustomerNode.getElementsByTagName(`orderDate`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        <p>${`ItemPrice: ${
          CustomerNode.getElementsByTagName(`itemPrice`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        <p>${`ItemQuantity: ${
          CustomerNode.getElementsByTagName(`itemQty`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        </li>`);
    listElement.appendChild(listItem);
  }
}
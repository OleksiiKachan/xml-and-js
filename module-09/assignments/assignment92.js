function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  
  function createCard(customer) {
    const content = `<li>
    <article>
    <p>${customer.name}</p>
    <h2>${customer.phone}</h2>
    <div>
      ${customer.email} ${customer.address}
    </div>
  </article>
  </li>`;
  
    return stringToNode(content);
  }
  
  function parseCard(xml) {
    const name = xml.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
    const phone = xml.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;
    const email =
      xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
    const address =
      xml.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
  
    return {
        name,
        phone,
        email,
        address,
    };
  }
  
  function displayData(xmlDoc) {
    const cards = xmlDoc.getElementsByTagName(`customer`);
  
    const list = document.getElementById(`cards`);
  
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const parsedCard = parseCard(element);
  
      const cardElement = createCard(parsedCard);
      list.appendChild(cardElement);
    }
  }
  
  fetch("/module-05/customers.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "text/xml"))
    .then(displayData);
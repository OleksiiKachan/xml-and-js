function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  
  function createCard(people) {
    const content = `<li>
    <article>
      <p>${people.first_name}</p> <h2>${people.last_name}</h2>
      <div>
        ${people.email} 
      </div>
    </article>
  </li>`;
  
    return stringToNode(content);
  }
  
  function parseCard(xml) {
    const first_name = xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
    const last_name = xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
    const email =
      xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
    
  
    return {
      first_name,
      last_name,
      email,
  
    };
  }
  
  
  function displayData(xmlDoc) {
    const cards = xmlDoc.getElementsByTagName(`row`);
  
    const list = document.getElementById(`cards`);
  
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const parsedCard = parseCard(element);
  
      const cardElement = createCard(parsedCard);
      list.appendChild(cardElement);
    }
  }
  
  fetch("people.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "text/xml"))
    .then(displayData);
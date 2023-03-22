function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim(); //removes extra spaces from end of string- clean data
    template.innerHTML = html;
    return template.content.firstChild;
  }

  function createPeople(people) {
    const content = `<li>
<article>
<p>${people.first_name + ' '+ people.last_name}</p>
</article>
</li>`;

    return stringToNode(content);
  }

  function parsePeople(xml) {
    const first_name =
      xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
    const last_name =
      xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;


    return {
      first_name,
      last_name,
    };
  }

  function displayData(xmlDoc) {
    const people = xmlDoc.getElementsByTagName(`row`);

    const list = document.getElementById(`people`);

    for (let index = 0; index < people.length; index++) {
      const element = people[index];
      const parsedPeople = parsePeople(element);

      const peopleElement = createPeople(parsedPeople);
      list.appendChild(peopleElement);
    }
  }

  const loadData = async () => {
    const response = await fetch("people.xml");
    const str = await response.text();
    const xmlData = new DOMParser().parseFromString(str, "text/xml");
    displayData(xmlData);
  };
  
  loadData();


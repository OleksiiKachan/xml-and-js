function parsePeople(xml){
    const fullName=xml.getElementsByTagName('firstname')[0].childNodes[0].nodeValue
    + ' '+
    xml.getElementsByTagName('lastname')[0].childNodes[0].nodeValue
    ;

    return peopleObject ={fullName};
    };

    function stringToNode(html) {
        const template = document.createElement(`template`);
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
      }

    function createPeople(people){
        const content = `
        <li>
            <article>
            <h3>${people.fullName}</h3>
            </article>

        </li>
        `;

        return stringToNode(content);
    };

    function displayData(xmlDoc){
        const list=document.getElementById('list');

        const ppls = xmlDoc.getElementsByTagName('person');

        for(let index = 0; index < ppls.length; index++){
            const people = ppls[index];
            const parsedPeople=parsePeople(people);

            const peopleElement=createPeople(parsedPeople);
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
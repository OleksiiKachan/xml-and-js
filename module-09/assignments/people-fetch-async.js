        function stringToNode(html){
            const template = document.createElement(`template`);
            html = html.trim();
            template.innerHTML = html;
            return template.content.firstChild;
        }


        function createPeople(people){
            const content = 
            `<li>
                <article>
                    <p>${people.id}</p>
                    <h2>${people.first} ${people.last}</h2>
                    <p>${people.email}</p>
                    <p>${people.gender}</p>
                    <p>${people.ipadd}</p>
                </article>
             <li>`;   

                return stringToNode(content);
        }


        function parsePeople(xml){
            const id = 
            xml.getElementsByTagName(`id`)[0].childNodes[0].nodeValue;
            const first = 
            xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
            const last =
            xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
            const email =
            xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
            const gender =
            xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
            const ipadd =
            xml.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue;

            return{
                id,
                first,
                last,
                email,
                gender,
                ipadd,
            };
        }


        function displayData(xmlDoc){
            const people = xmlDoc.getElementsByTagName(`records`);

            const list = document.getElementById(`people`);

            for(let index = 0; index < people.length; index ++){
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
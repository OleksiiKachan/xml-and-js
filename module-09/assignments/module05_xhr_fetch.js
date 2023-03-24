function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function createPerson(people) {
    const content = 
    `<li>
        <article>
            <h3>${people.firstName} ${people.lastName}</h3>
            <p>
                <b>Gender:</b> ${people.gender} <br>
                <b>E-mail:</b> ${people.email} <br>
                <b>IP Address:</b> ${people.ipAddress}
            </p>
        </article>
    </li>`;
    return stringToNode(content);
}

function parsePeople(xml) {
    const firstName = xml.getElementsByTagName(`firstName`)[0].childNodes[0].nodeValue;
    const lastName = xml.getElementsByTagName(`lastName`)[0].childNodes[0].nodeValue;
    const email = xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
    const gender = xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
    const ipAddress = xml.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue;

    return {
        firstName, 
        lastName,
        email,
        gender,
        ipAddress
    };
}

function displayData(xmlDoc) {
    const people = xmlDoc.getElementsByTagName(`person`);
    const list = document.getElementById(`peopleList`);

    for (let index = 0; index < people.length; index++) {
        const peopleElement = people[index];
        const parsedPeople = parsePeople(peopleElement);
        const createPeopleElement = createPerson(parsedPeople);
        list.append(createPeopleElement);
    }
}

fetch("people.xml").then((response) => response.text())
                   .then((str) => new DOMParser().parseFromString(str, "text/xml"))
                   .then(displayData);

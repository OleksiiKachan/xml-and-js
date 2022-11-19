fetch("activity2.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "text/xml"))
    .then(displayData)

function displayData(xml) {
    const people = xml.getElementsByTagName(`people`);
    const personDetail = document.getElementById(`personDetail`);

    for (let i = 0; i < people.length; i++) {
        const element = people[i];
        const parsedCard = parseXML(element);

        const rootElement = displayPeople(parsedCard);
        personDetail.appendChild(rootElement);
    }
}

function parseXML(xml) {
    const id =
        xml.getElementsByTagName(`id`)[0].childNodes[0].nodeValue;
    const firstName =
        xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
    const lastName =
        xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
    const email =
        xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
    const gender =
        xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
    const ipAddress =
        xml.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue;
    return {
        id,
        firstName,
        lastName,
        email,
        gender,
        ipAddress,
    };
}

function createNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;

}

function displayPeople(personDetail) {
    const content = `<tr>
                         <td>${personDetail.id}</td>
                         <td>${personDetail.firstName}</td>
                         <td>${personDetail.lastName}</td>
                        <td>${personDetail.email}</td>
                         <td>${personDetail.gender}</td>
                        <td>${personDetail.ipAddress}</td>
                    </tr>`;
    return createNode(content);
}
const xhr = (url, method = `GET`) => 
    new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if(this.readyState === 4 && this.status === 200)
            {
                displayData(this.responseXML);
            }
        };
        xhttp.open(method,url);
        xhttp.send();
    });
function stringToNode(html)
{
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}
function createPerson(pers)
{
    const content =
    `
        <li>
            <article>
                <p>First Name: ${pers.firstname}</p>
                <p>Last Name: ${pers.lastname}</p>
                <p>Email: ${pers.email}</p>
                <hr/>
            </article>
        </li>
    `;
    return stringToNode(content);
}
function parsePerson(xml)
{
    const firstname =
        xml.getElementsByTagName(`firstname`)[0].childNodes[0].nodeValue;
    const lastname = 
        xml.getElementsByTagName(`lastname`)[0].childNodes[0].nodeValue;
    const email = 
        xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;

    return{
        firstname,
        lastname,
        email,
    };
}
function displayData(xmlDoc)
{
    const persons = xmlDoc.getElementsByTagName(`person`);

    const list = document.getElementById(`persons`);

    for(let index = 0 ; index < persons.length ; index++)
    {
        const element = persons[index];
        const parsedPerson = parsePerson(element);

        const personElement = createPerson(parsedPerson);
        list.appendChild(personElement);
    }
}

//Using the XHR function Call:
//xhr("tempPeople.xml").then((data) => displayData(data))

//Using the 'fetch then' chain to resolve:
 fetch(`tempPeople.xml`)
    .then((response) => response.text())
    .then((data) => new DOMParser().parseFromString(data,"text/xml"))
    .then(displayData)

//Using Async Await to resolve:
// const main = async () => {
//     const response = await fetch(`tempPeople.xml`);
//     const data = await response.text();
//     const xmlData = new DOMParser().parseFromString(data, "text/xml");
//     displayData(xmlData);
// };

// main();

//Merger of both Async Await and 'then' chain
// const main = async () => {
//     const data = await fetch(`tempPeople.xml`).then((response) => response.text());
//     const xmlData = new DOMParser().parseFromString(data, "text/xml");
//     displayData(xmlData);
// };
// main();
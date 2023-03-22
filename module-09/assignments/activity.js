// const xhr = (url,method = `GET`) => new Promise((resolve) => {
//        const xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function () {
//               if (this.readyState == 4 && this.status == 200) {
//                      resolve(this.responseXML);
//               }
//        };
//        xhttp.open(method, url,true);
//        xhttp.send();
// });

function stringToNode(html) {
       const template = document.createElement(`template`);
       html = html.trim();
       template.innerHTML = html;
       return template.content.firstChild;
}

function createPersonInfoDiv(person) {
       const content = `
        <div>
               ${person.firstName} ${person.lastName}
        </div>`;

       return stringToNode(content);
}

function parsePersonInfoDiv(xml) {
       const firstName =
              xml.getElementsByTagName(`firstName`)[0].childNodes[0].nodeValue;
       const lastName =
              xml.getElementsByTagName(`lastName`)[0].childNodes[0].nodeValue;

       return {
              firstName,
              lastName,
       };
}

function displayData(xmlDoc) {
       const people = xmlDoc.getElementsByTagName(`person`);

       const list = document.getElementById(`people`);
       console.log(people.length);
       for (let index = 0; index < people.length; index++) {
              const element = people[index];
              console.log(element);
              const parsedCard = parsePersonInfoDiv(element);
              console.log(parsedCard);
              const cardElement = createPersonInfoDiv(parsedCard);
              console.log(cardElement);
              list.appendChild(cardElement);
              console.log(list);
       }
}

//with xhr function
//xhr(`people.xml`).then((data) => displayData(data));

//with fetch API
fetch(`people.xml`).then((response) => response.text())
.then((data) => new DOMParser().parseFromString(data,`text/xml`))
.then((xmlDoc) => displayData(xmlDoc));

//with async 
// const main = async () => {
// const data = await fetch(`people.xml`).then((response) => response.text())
// .then((data) => new DOMParser().parseFromString(data,`text/xml`))
// displayData(data);
// }

// main();
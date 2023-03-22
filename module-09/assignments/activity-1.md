# Activity 1

- Take your module-5 activity​
- Write _promisified_ version of XHR​
- Use your new function to load data instead of using XHR directly​

![image info](/module-09/assignments/output.png)

const xhr = (url, method = `GET`) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseXML);
      }
    };
    xhttp.open(method, url);
    xhttp.send();
  });

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

      xhr("people.xml").then(displayData)

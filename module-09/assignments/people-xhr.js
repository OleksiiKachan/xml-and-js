const xhr = (url, method = 'GET') =>
            new Promise ((resolve) => {
                const xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status ==200){
                        resolve(this);
                    }
                };
            xhttp.open(method, url);
            xhttp.send();
            });


            function displayData(xml) {
                const listElement = document.getElementById(`people`);

                const xmlDoc = xml.responseXML;
                console.log(xml);
                const peopleNodes = xmlDoc.getElementsByTagName(`person`);

                for (let index = 0; index < peopleNodes.length; index++) {
                const persons = peopleNodes[index];

                const listItem = document.createElement(`li`);

                const title = document.createElement(`h3`);
                title.appendChild(
                    document.createTextNode(
                    persons.getElementsByTagName(`firstName`)[0].childNodes[0]
                        .nodeValue +
                        ` ` +
                        persons.getElementsByTagName(`lastName`)[0].childNodes[0]
                        .nodeValue
                    )
                );

               
                listItem.appendChild(title);
                listElement.appendChild(listItem);
                }
            }
            
        

//xhr
//xhr("people.xml").then((value) => displayData(value));



/*const main = async() => {

const data = await fetch("people.http");
const stringData = await data.text();

    const parser = new DOMParser();
    const parsed = parser.parseFromString(data, `text/xml`);
    displayData(parsed);
};

main();*/
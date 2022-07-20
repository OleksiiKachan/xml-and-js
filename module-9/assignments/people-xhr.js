const xhr = (url, method = "GET") =>
new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseXML);
          }
        };
})
        xhttp.open(method, url);
        xhttp.send();

        function displayData(xml) {
            const listElement = document.getElementById(`people`);
    
            const xmlDoc = xml;
            const personNodes = xmlDoc.getElementsByTagName("person");
    
            for (let index = 0; index < personNodes.length; index++) {
              const person = personNodes[index];
    
              const listItem = document.createElement(`tr`);
    
              const id = document.createElement(`td`);
              id.appendChild(
                document.createTextNode(
                    person.getElementsByTagName("id")[0].childNodes[0]
                    .nodeValue
                )
              );
              listItem.appendChild(id);
    
              const fullname = document.createElement(`td`);
              fullname.appendChild(
                document.createTextNode(
                    person.getElementsByTagName("first_name")[0].childNodes[0]
                    .nodeValue +
                    ` ` +
                    person.getElementsByTagName("last_name")[0].childNodes[0]
                      .nodeValue
                )
              );
              listItem.appendChild(fullname);
    
              const email = document.createElement(`td`);
              email.appendChild(
                document.createTextNode(
                    person.getElementsByTagName("email")[0].childNodes[0]
                    .nodeValue
                )
              );
              listItem.appendChild(email);
    
              const gender = document.createElement(`td`);
              gender.appendChild(
                document.createTextNode(
                    person.getElementsByTagName("gender")[0].childNodes[0]
                    .nodeValue
                )
              );
              listItem.appendChild(gender);
    
              const ip_address = document.createElement(`td`);
              ip_address.appendChild(
                document.createTextNode(
                    person.getElementsByTagName("ip_address")[0].childNodes[0]
                    .nodeValue
                )
              );
              listItem.appendChild(ip_address);
    
              listElement.appendChild(listItem);
            }
          }

xhr(`people.xml`).then(displayData);
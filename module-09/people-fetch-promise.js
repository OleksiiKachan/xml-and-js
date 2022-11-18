  function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  function displayData(xmlDoc) {
    const xmlDoc = this.responseXML; 
    const listElement = document.getElementById("list");
    const peoples = xmlDoc.getElementsByTagName(`people`);

    for(let index = 0; index < peoples.length; index++){

                        const peopleNodes = peoples[index];

                        const id = peopleNodes.getElementsByTagName(`id`)[0].childNodes[0].nodeValue;
                        const firstName = peopleNodes.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
                        const lastName = peopleNodes.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
                        const email = peopleNodes.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
                        const gender = peopleNodes.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
                        const ipAddress = peopleNodes.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue;

                        const htmlstring = `<li><h2> Id : ${id}</li></h2><br> 
                        <li><h2> firstname : ${firstName}</li></h2><br> 
                        <li><h2> lastname : ${lastName}</li></h2><br> 
                        <li><h2> email : ${email}</li></h2><br> 
                        <li><h2> gender : ${gender}</li></h2><br> 
                        <li><h2> address : ${ipAddress}</li></h2><br>`

                       const value = listElement.innerHTML + htmlstring 
                       listElement.innerHTML=value;
                    }
  }

  fetch("people.xml")
  .then((response) => response.text())
  .then((str) => new DOMParser().parseFromString(str, "text/xml"))
  .then(displayData);
const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    displayData(this.responseXML);
                }
            };
        xhttp.open("GET", "construction.xml", true);
        xhttp.send();
        function displayData(xmlDoc) {
            const list = document.getElementById("constructionDetails");
            const labourNodes = xmlDoc.getElementsByTagName(`slot`);
            for(let index=0;index<labourNodes.length;index++)
            {
                const constructionDetails = labourNodes[index];
                const startDate = constructionDetails.getElementsByTagName(`startDate`)[0].childNodes[0].nodeValue;
                const endDate = constructionDetails.getElementsByTagName(`endDate`)[0].childNodes[0].nodeValue;
                const street = constructionDetails.getElementsByTagName(`street`)[0].childNodes[0].nodeValue;
                const city = constructionDetails.getElementsByTagName(`city`)[0].childNodes[0].nodeValue;
                const region = constructionDetails.getElementsByTagName(`region`)[0].childNodes[0].nodeValue;
                const country = constructionDetails.getElementsByTagName(`country`)[0].childNodes[0].nodeValue;
                const firstName = constructionDetails.getElementsByTagName(`firstName`)[0].childNodes[0].nodeValue;
                const lastName = constructionDetails.getElementsByTagName(`lastName`)[0].childNodes[0].nodeValue;
                const role = constructionDetails.getElementsByTagName(`role`)[0].childNodes[0].nodeValue;
                const type = constructionDetails.getElementsByTagName(`type`)[0].childNodes[0].nodeValue;
                const qty = constructionDetails.getElementsByTagName(`qty`)[0].childNodes[0].nodeValue;
                
                const htmlstring=
                `<ul>
                        <li><h4>Construction - ${index+1}</h4>
                        <li><p>StartDate: ${startDate}</p>
                        <li><p>EndDate: ${endDate}</p>
                        
                        
                        <li><h5> Address: </h5>
                            <ul>
                                <li><p> Street: ${street}</p>
                                <li><p> City: ${city}</p>
                                <li><p> Region: ${region}</p>
                                <li><p> Country: ${country}</p> 
                                
                                   
                            </ul>
                        </li>
                        <li><h5> Workers: </h5>
                            <ul>
                                <li><p> FirstName: ${firstName}</p>
                                <li><p> LastName: ${lastName}</p>
                                <li><p> Role: ${role}</p>
                                
                                  
                            </ul>
                        </li>
                        <li><h5> Equipments: </h5>
                            <ul>
                                <li><p> Type: ${type}</p>
                                <li><p> Quantity: ${qty}</p>
                                
                                
                                  
                            </ul>
                        </li>
                    </ul><hr>
                    `;
                const value= list.innerHTML + htmlstring;
                list.innerHTML = value;
                
            }
        }
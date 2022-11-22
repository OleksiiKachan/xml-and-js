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
            

            function stringToNode(html) {
                const template = document.createElement(`template`);        
                html = html.trim();        
                template.innerHTML = html;        
                return template.content.firstChild;
            }


            function displayDetails(xmlDoc) {            
                const listElement = document.getElementById(`customers`);                 
                const customersNode = xmlDoc.getElementsByTagName(`customer`);

                for (let index = 0; index < customersNode.length; index++) {          
                    const customer = customersNode[index];
                    const listItem = stringToNode
                    (`<li>                    
                        <h2>
                            ${customer.getElementsByTagName(`name`)[0].getAttribute(`title`)} 
                            ${customer.getElementsByTagName(`name`)[0].childNodes[0].nodeValue}
                        </h2>          
                            <p>${`Customer ID: ${customer.getAttribute(`custID`)}`}</p>
                            <p>${`Address:${customer.getElementsByTagName(`address`)[0].childNodes[0].nodeValue}`}</p>
                            <p>${`Phone: ${customer.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue}`}</p>
                            <p>${`Email: ${customer.getElementsByTagName(`email`)[0]?.childNodes[0]?.nodeValue}`}</p>
                            <p>${`OrderID: ${customer.getElementsByTagName(`order`)[0].getAttribute(`orderID`)}`}</p>
                            <p>${`Order by: ${customer.getElementsByTagName(`order`)[0].getAttribute(`orderBy`)}`}</p>
                            <p>${`OrderDate: ${customer.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue }`}</p>          
                            <p>${`Price: ${customer.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue}`}</p> 
                            <p>${`Quantity: ${customer.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue}`}</p>

                    </li>`);          
                    
                    listElement.appendChild(listItem); 
                }      
            } 
            
        

//xhr
xhr("customers.xml").then((value) => displayDetails(value.responseXML));
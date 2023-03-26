function stringToNode(html){
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function displayData(xmlDoc) {
    const listElement = document.getElementById(`customerTable`);

    const customers = xmlDoc.getElementsByTagName(`customer`);
    const orders = xmlDoc.getElementsByTagName(`order`);
    const items = xmlDoc.getElementsByTagName(`item`);


    for (let index = 0; index < customers.length; index++) {
        const customer = customers[index];
        const order = orders[index];
        const item = items[index];

        const listItem = stringToNode(
            `<tr>
               <td>${customer.getAtrribute(`custID`)}</td>
               <td>${customer.getElementsByTagName(`name`)[0].childNodes[0].nodeValue}</td>
               <td>${customer.getElementsByTagName(`address`)[0].childNodes[0].nodeValue}</td>
               <td>${customer.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue}</td>
               <td>
                  <ul>
                     <li><b>Order ID : </b>${order.getAtrribute(`orderID`)}</li>
                     <li><b> Order Date: </b>${order.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue}</li>
                     <li><b>Item qty: </b>${item.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue}</li>
                     <li><b>Item price: </b>${item.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue}</li>
                  </ul>
                </td>
            </tr>`
        )

        listElement.append(listItem);

    
       

        
    }
}

fetch("customers.xml").then((response) => response.text()).then((str) => new DOMParser().parseFromString(str, "text/xml")).then(displayData);
fetch("customers.xml").then((response) => response.text()).then((str) => new DOMParser().parseFromString(str, "text/xml")).then();
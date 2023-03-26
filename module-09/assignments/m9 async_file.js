function stringToNode(html){
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function displayData(xmlDoc) {
    const listElement = document.getElementById(`customerTable`);

    const customerNodes = xmlDoc.getElementsByTagName(`customer`);
    const orderNodes = xmlDoc.getElementsByTagName(`order`);
    const itemNodes = xmlDoc.getElementsByTagName(`item`);


    for (let index = 0; index < customerNodes.length; index++) {
        const customer = customerNodes[index];
        const order = orderNodes[index];
        const item = itemNodes[index];

        const listItem = stringToNode(
            `<tr>
               <td>${customer.getElementsByTagName(`name`)[0].childNodes[0].nodeValue}</td>
               <td>${customer.getElementsByTagName(`address`)[0].childNodes[0].nodeValue}</td>
               <td>${customer.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue}</td>
               <td>
                  <ul>
                     <li><b>Order ID: </b>${order.getAtrribute(`orderID`)}</li>
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

const loadData = async () => {
    const response = await fetch("customers.xml");
    const str = await response.text();
    const xmlData = new DOMParser().parseFromString(str, "text/xml");
    displayData(xmlData)
};

loadData();
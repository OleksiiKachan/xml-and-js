function stringToNode(html){
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function displayData(xmlDoc){
    const listElement = document.getElementById(`customerTable`);

    const customerNodes = xmlDoc.getElementsByTagName(`customer`);
    const orderNodes = xmlDoc.getElementsByTagName(`order`);
    const itemNodes = xmlDoc.getElementsByTagName(`item`);

    for(let index = 0; index < customerNodes.length; index++) {
        const current_customerNode = customerNodes[index];
        const current_orderNode = orderNodes[index];
        const current_itemNode = itemNodes[index];

        const listItem = stringToNode(
            `<tr>
                <td>${current_customerNode.getAttribute(`custID`)}</td>
                <td>${current_customerNode.getElementsByTagName(`name`)[0].childNodes[0].nodeValue}</td>
                <td>${current_customerNode.getElementsByTagName(`address`)[0].childNodes[0].nodeValue}</td>
                <td>${current_customerNode.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue}</td>
                <td>
                    <ul>
                        <li><b>Order ID: </b>${current_orderNode.getAttribute(`orderID`)}</li>
                        <li><b>Order-date: </b>${current_orderNode.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue}</li>
                        <li><b>Item Quantity: </b>${current_itemNode.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue}</li>
                        <li><b>Item Price: </b>${current_itemNode.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue}</li>
                    </ul>
                </td>
            </tr>`
        )

        listElement.append(listItem);
    }
}

fetch("customers.xml").then((response) => response.text()).then((str) => new DOMParser().parseFromString(str, "text/xml")).then(displayData);

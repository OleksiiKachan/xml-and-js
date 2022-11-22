const xhr = (url, method = 'GET') => new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseXML);
        }
    };
    xhttp.open(method, url);
    xhttp.send();
});

function displayData(xml) {
    const customers = xml.getElementsByTagName(`customer`);
    const customerDetail = document.getElementById(`customerDetail`);

    for (let i = 0; i < customers.length; i++) {
        const element = customers[i];
        const parsedData = parseXML(element);

        const rootElement = displayCustomers(parsedData);
        customerDetail.appendChild(rootElement);
    }
}

function parseXML(xml) {
    const custID =
        xml.getAttribute(`custID`);
    const title =
        xml.getElementsByTagName(`name`)[0].getAttribute(`title`);
    const name =
        xml.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
    const address =
        xml.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
    const phone =
        xml.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;
    let email = "";
        if(xml.getElementsByTagName(`email`)[0] == null) {
            email = "Not given";
        } else {
            email = xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
        }
    const orderID =
        xml.getElementsByTagName(`order`)[0].getAttribute(`orderID`);
    const orderBy =
        xml.getElementsByTagName(`order`)[0].getAttribute(`orderBy`);
    const orderDate =
        xml.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue;
    const itemPrice =
        xml.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue;
    const itemQty =
        xml.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue;
    return {
        custID,
        title,
        name,
        address,
        phone,
        email,
        orderID,
        orderBy,
        orderDate,
        itemPrice,
        itemQty
    };
}

function createNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;

}

function displayCustomers(customerDetail) {
    const content = `<tr>
                         <td>${customerDetail.custID}</td>
                         <td>${customerDetail.title} ${customerDetail.name}</td>
                        <td>${customerDetail.address}</td>
                         <td>${customerDetail.phone}</td>
                        <td>${customerDetail.email}</td>
                        <td><ul><li><strong>Order ID: </strong>${customerDetail.orderID}</li><li><strong>Order By: </strong>${customerDetail.orderBy}</li><li><strong>Order Date: </strong>${customerDetail.orderDate}</li></ul></td>
                        <td><ul><li><strong>Price: </strong>${customerDetail.itemPrice}</li><li><strong>Qty: </strong>${customerDetail.itemQty}</li></ul></td>
                    </tr>`;
    return createNode(content);
}

xhr("assignment.xml").then(displayData);
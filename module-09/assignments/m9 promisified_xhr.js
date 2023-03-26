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


  function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

function createCustomer(customer) {
    const content = `<li>
    <article>
    <p>${customer.name}</p>
    <h2>${customer.address}</h2>
    <h3>${customer.phone}</h3>
    <div>${customer.email} ${customer.orderID} 
    ${customer.itemprice} ${customer.itemqty}
    </div>
    </article>
    </li>`

    return stringToNode(content);
}

function parseCustomer(xml) {
    const name = xml.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
    const address = xml.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
    const phone = xml.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;
    const email = xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
    const orderID = xml.getElementsByTagName(`orderID`)[0].childNodes[0].nodeValue;
    const itemprice = xml.getElementsByTagName(`itemprice`)[0].childNodes[0].nodeValue;
    const itemqty = xml.getElementsByTagName(`itemqty`)[0].childNodes[0].nodeValue;

    return {
        name,
        address,
        phone,
        email,
        orderID,
        itemprice,
        itemqty,
    };

}

function displayData(xmlDoc) {
    const customers = xmlDoc.getElementsByTagName(`record`);
    const list = document.getElementById('customers');

    for (let index = 0; index < customers.length; index++) {
        const element = customers[index];
        const parsedCustomer = parsedCustomer(element);

        const customerElement = createCustomer(parsedCustomer);
        list.append(customerElement);
    }
}

xhr("customers.xml").then(displayData);
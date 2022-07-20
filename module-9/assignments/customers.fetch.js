function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  

function createCustpmer(customer) {
const content = `<li>
<article>
  <p>${customer.custid}</p>
  <h2>${customer.name}</h2>
  <h2>${customer.address}</h2>
  <h2>${customer.phone}</h2>
  <h2>${customer.email}</h2>
  <p>${customer.orders}</p>
  <h2>${order.orderid}</h2>
  <h2>${order.orderdate}</h2>
  <p>${order.items}</p>
  <h2>${item.itemprice}</h2>
  <h2>${item.itemqty}</h2>
  <div>
    ${customer.custid} ${order.orderid}
  </div>
</article>
</li>`;

return stringToNode(content);
}

function parseCard(xml) {
const custid = xml.getElementsByTagName(`custid`)[0].childNodes[0].nodeValue;
const name = xml.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
const address =
  xml.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
const phone =
  xml.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;
  const email =
  xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
  const orderid =
  xml.getElementsByTagName(`orderid`)[0].childNodes[0].nodeValue;
  const orderdate =
  xml.getElementsByTagName(`orderdate`)[0].childNodes[0].nodeValue;
  const itemprice =
  xml.getElementsByTagName(`itemprice`)[0].childNodes[0].nodeValue;
  const itemqty =
  xml.getElementsByTagName(`itemqty`)[0].childNodes[0].nodeValue;
return {
  custid,
  name,
  address,
  phone,
  email,
  orderid,
  orderdate,
  itemprice,
  itemqty
};
}

function displayData(xmlDoc) {
const customers = xmlDoc.getElementsByTagName(`customer`);

const list = document.getElementById(`customers`);

for (let index = 0; index < customers.length; index++) {
  const element = customers[index];
  const parsedCustomer = parseCustomer(element);

  const customerElement = createCustomer(parsedCustomer);
  list.appendChild(customerElement);
}
}

  fetch("customers.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "text/xml"))
    .then(displayData);
  
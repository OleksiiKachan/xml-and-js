const stringToNode = (html) => {
    const template = document.createElement(`template`);
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
  }

  const createCustomers = (customers) => {
    const content = `
    <tr style="background-color: aquamarine;">
    <td>${customers.cust_id}</td>
    <td>${customers.title} ${customers.name}</td>
    <td>${customers.address}</td>
    <td>${customers.phone}</td>
    <td>${customers.email}</td>
    <td style="background-color: aquamarine;">
      <ol>
        <li>OrderID: ${customers.orderID}</li>
        <li>OrderBy: ${customers.orderBy}</li>
        <li>OrderDate: ${customers.orderDate}</li>
      </ol>
    </td>
    <td style="background-color: aquamarine;">
      <ol>
        <li>Item price: ${customers.itemPrice}</li>
       <li>Item quantity: ${customers.itemQty}</li>
      </ol>
    </td>
  </tr>
    `;

    return stringToNode(content);
  }

  const parseCustomers = (xml) => {
    const custId = xml.attributes[0].nodeValue;
    const title =
    xml.getElementsByTagName("name")[0].attributes[0].nodeValue;
    const name =
    xml.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
    const address =
    xml.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
    const phone =
    xml.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;

    if (xml.getElementsByTagName(`email`)[0]) {
        var email =
        xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
    } else {
        var email = "No email for given customer";
    }

    const orderID =
    xml.getElementsByTagName(`order`)[0].attributes[0].nodeValue;
    const orderBy =
    xml.getElementsByTagName(`order`)[0].attributes[1].nodeValue;
    const orderDate =
    xml.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue;
    const itemPrice =
    xml.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue;
    const itemQty =
    xml.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue;

    return {
      custId,
      title,
      name,
      address,
      phone,
      email,
      orderID,
      orderBy,
      orderDate,
      itemPrice,
      itemQty,
    };
  }

  const displayData =(xmlDoc) => {
    const customersData = xmlDoc.getElementsByTagName(`customer`);
    const list = document.getElementById(`customersData`);

    for (let index = 0; index< customersData.length; index++) {
      const custElement = customersData[index];
      const parsedCustomers = parseCustomers(custElement);

      const customersElement= createCustomers(parsedCustomers);
      list.appendChild(customersElement);
    }
  }

  fetch("customers.xml")
  .then((response) => response.text())
  .then((str) => new DOMParser().parseFromString(str, "text/xml"))
  .then(displayData);
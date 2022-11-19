const display = (xmlDoc) => {
  const customers = xmlDoc.getElementsByTagName("customer");

  const customersDiv = document.getElementById("customers");

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    let custId = customer.getAttribute("custID");

    let nameNode = customer.getElementsByTagName("name")[0];
    let name = nameNode.childNodes[0].nodeValue;
    let title = nameNode.getAttribute("title");

    let address =
      customer.getElementsByTagName("address")[0].childNodes[0]
        .nodeValue;
    let phone =
      customer.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
    let email =
      customer.getElementsByTagName("email")[0]?.childNodes[0]
        ?.nodeValue;

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const customerDiv = document.createElement("div");
    customerDiv.classList.add("customer");
    const pId = document.createElement("p");
    pId.classList.add("id");

    pId.innerHTML = `CUSTOMER: ${custId}`;

    const circleDiv = document.createElement("div");
    circleDiv.classList.add("circle");
    const pName = document.createElement("p");
    pName.classList.add("name");
    const pEmail = document.createElement("p");
    pEmail.classList.add("email");
    const pAddress = document.createElement("p");
    pAddress.classList.add("address");
    const pPhone = document.createElement("p");
    pPhone.classList.add("phone");

    pName.innerHTML = `${title} ${name}`;
    pEmail.innerHTML = email || "N/A";
    pAddress.innerHTML = address;
    pPhone.innerHTML = phone;

    customerDiv.append(pId);
    customerDiv.append(circleDiv);
    customerDiv.append(pName);
    customerDiv.append(pEmail);
    customerDiv.append(pAddress);
    customerDiv.append(pPhone);

    cardDiv.appendChild(customerDiv);

    console.log(custId, title, name, address, phone, email);

    //customerDiv.appendChild(span)
    let orders = customer.getElementsByTagName("order");

    for (let j = 0; j < orders.length; j++) {
      const order = orders[j];

      let orderId = order.getAttribute("orderID");
      let orderBy = order.getAttribute("orderBy");
      let orderDate =
        order.getElementsByTagName("orderDate")[0].childNodes[0]
          .nodeValue;

      const ordersDiv = document.createElement("div");
      ordersDiv.classList.add("orders");

      let orderStr = `<div><p class="ordersTitle">Orders</p>
                      <div class="order">
                          <p>Order #${j+1}</p>
                          <p>Id: ${orderId}</p>
                          <p>OrderBy: ${orderBy}</p>
                          <p>Date: ${orderDate}</p>
                        </div>
                        <div class="items">
                          <p>Item</p>
                          <p>Price</p>
                          <p>Quantity</p>`;

      console.log(orderId, orderBy, orderDate);
      const items = order.getElementsByTagName("item");

      for (let k = 0; k < items.length; k++) {
        const item = items[k];

        let itemPrice =
          item.getElementsByTagName("itemPrice")[0].childNodes[0]
            .nodeValue;
        let itemQty =
          item.getElementsByTagName("itemQty")[0].childNodes[0]
            .nodeValue;

        orderStr += ` <p class="item_num">Item #${k + 1}</p>
                      <p>${itemPrice}</p>
                      <p>${itemQty}</p>
                    </div></div>`;

        const tempP = document.createElement("p");
        tempP.innerHTML = orderStr;

        ordersDiv.appendChild(tempP.firstChild);
        cardDiv.appendChild(ordersDiv);

        console.log(itemPrice, itemQty);
      }
    }

    customersDiv.appendChild(cardDiv);
  }
}

const main = async () => {
  const result = await fetch('customers.xml')
  const data = await result.text()
  const parser = new DOMParser()
  display(parser.parseFromString(data, 'text/xml'))
}

main()
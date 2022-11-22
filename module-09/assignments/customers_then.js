// module-9 assignment fetch - then


fetch('customers.xml')
.then(result => result.text())
.then(data => {
  const parser = new DOMParser()
  display(parser.parseFromString(data, 'text/xml'))
})

const xhr_promise = (url, method = 'GET') =>{
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if (this.readyState === 4 && this.status === 200){
                resolve(this.responseXML)
            }
        };

        xhr.open(method, url, true);
        xhr.send();
    })
}

const display = (xmlDoc) => {

    const customers = xmlDoc.getElementsByTagName("customer");

    const customersDiv = document.getElementById("customers");

    for(let i=0; i< customers.length; i++){

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
    const paraId = document.createElement("p");
    paraId.classList.add("id");

    paraId.innerHTML = `CUSTOMER: ${custId}`;

    const newDiv = document.createElement("div");
    const paraName = document.createElement("p");
    paraName.classList.add("name");
    const paraEmail = document.createElement("p");
    paraEmail.classList.add("email");
    const paraAddress = document.createElement("p");
    paraAddress.classList.add("address");
    const paraPhone = document.createElement("p");
    paraPhone.classList.add("phone");

    paraName.innerHTML = `${title} ${name}`;
    paraEmail.innerHTML = email || "N/A";
    paraAddress.innerHTML = address;
    paraPhone.innerHTML = phone;

    customerDiv.append(paraId);
    customerDiv.append(newDiv);
    customerDiv.append(paraName);
    customerDiv.append(paraEmail);
    customerDiv.append(paraAddress);
    customerDiv.append(paraPhone);

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

        const tempPara = document.createElement("p");
        tempPara.innerHTML = orderStr;

        ordersDiv.appendChild(tempPara.firstChild);
        cardDiv.appendChild(ordersDiv);

        console.log(itemPrice, itemQty);
      }
    }

    customersDiv.appendChild(cardDiv);
    }
}


xhr_promise('customers.xml').then((value) => display(value))

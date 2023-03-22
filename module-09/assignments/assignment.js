// const xhr = (url,method = `GET`) => new Promise((resolve) => {
//        const xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function () {
//               if (this.readyState == 4 && this.status == 200) {
//                      resolve(this.responseXML);
//               }
//        };
//        xhttp.open(method, url);
//        xhttp.send();
// });

function displayData(xml) {
       const listElement = document.getElementById(`customers`);
       
       const customerNodes = xml.getElementsByTagName("customer");

       for (let index = 0; index < customerNodes.length; index++) {
              const customer = customerNodes[index];
              const listItem = document.createElement(`li`);

              const title = document.createElement(`h2`);
              title.appendChild(
                     document.createTextNode(
                            customer.getElementsByTagName("name")[0].attributes.title.value +
                            ` ` +
                            customer.getElementsByTagName("name")[0].childNodes[0]
                                   .nodeValue
                     )
              );
              listItem.appendChild(title);

              const custId = document.createElement(`p`);
              custId.appendChild(
                     document.createTextNode(
                            `CustomerId: ` + customer.getAttribute(`custID`)
                     )
              );
              listItem.appendChild(custId);

              const address = document.createElement(`p`);
              address.appendChild(
                     document.createTextNode(
                            `Address: ` + customer.getElementsByTagName("address")[0].childNodes[0]
                                   .nodeValue
                     )
              );
              listItem.appendChild(address);

              const phone = document.createElement(`p`);
              phone.appendChild(
                     document.createTextNode(
                            `Phone: ` + customer.getElementsByTagName("phone")[0].childNodes[0]
                                   .nodeValue
                     )
              );
              listItem.appendChild(phone);

              if (customer.getElementsByTagName("email")[0] != undefined) {
                     const email = document.createElement(`p`);
                     email.appendChild(
                            document.createTextNode(
                                   `Email: ` + customer.getElementsByTagName("email")[0].childNodes[0]
                                          .nodeValue
                            )
                     );
                     listItem.appendChild(email);
              }

              const orders = document.createElement(`ul`);
              const order = xml.getElementsByTagName(`order`);
              const orderDate = xml.getElementsByTagName(`orderDate`);

              const orderId = document.createElement(`li`);
              orderId.appendChild(
                     document.createTextNode(`Order ID : ` + order[index].attributes[0].nodeValue)
              )


              const orderBy = document.createElement(`li`);
              orderBy.appendChild(
                     document.createTextNode(
                            `Order By : ` + order[index].attributes[1].nodeValue
                     )
              )

              const orderDateElement = document.createElement(`li`);
              orderDateElement.appendChild(
                     document.createTextNode(`Order date : ` + orderDate[index].childNodes[0].data)
              )

              orders.appendChild(orderId);
              orders.appendChild(orderBy);
              orders.appendChild(orderDateElement);
              listItem.appendChild(orders);

              const items = document.createElement(`ul`);
              const itemPrice = xml.getElementsByTagName(`itemPrice`);
              const itemQty = xml.getElementsByTagName(`itemQty`);

              const price = document.createElement(`li`)
              price.appendChild(
                     document.createTextNode(`Item price: ` + itemPrice[index].childNodes[0].data)
              )

              const quantity = document.createElement(`li`)
              quantity.appendChild(
                     document.createTextNode(`Item Quantity: ` + itemQty[index].childNodes[0].data)
              )
              items.appendChild(price);
              items.appendChild(quantity);
              listItem.appendChild(items);

              listElement.appendChild(listItem);
       }
}

//with xhr function
//xhr(`../customers.xml`).then((data) => displayData(data));

//with fetch API
// fetch(`../customers.xml`).then((response) => response.text())
// .then((data) => new DOMParser().parseFromString(data,`text/xml`))
// .then((xmlDoc) => displayData(xmlDoc));

//with async 
const main = async () => {
const data = await fetch(`../customers.xml`).then((response) => response.text())
.then((data) => new DOMParser().parseFromString(data,`text/xml`))
displayData(data);
}

main();
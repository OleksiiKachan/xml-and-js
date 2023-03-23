function displayData(data) {
  const customers = data.getElementsByTagName("customer");

  for (let index = 0; index < customers.length; index++) {
    const name = customers[index].getElementsByTagName("name")[0].textContent;
    const address = customers[index].getElementsByTagName("address")[0].textContent;
    const phone = customers[index].getElementsByTagName("phone")[0].textContent;
    const email =
      customers[index].getElementsByTagName("email")[0]?.textContent ?? "N/A";

    let orderTable = "";
    const orders = customers[index].getElementsByTagName("orders")[0];
    if (orders) {
      orderTable = `
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
      `;

      const order = orders.getElementsByTagName("order");
      for (let len = 0; len < order.length; len++) {
        const orderID = order[len].getElementsByTagName("id")[0].textContent;
        const orderDate = order[len].getElementsByTagName("date")[0].textContent;
        const items = order[len].getElementsByTagName("item");
        let itemList = "";
        for (let i = 0; i < items.length; i++) {
        const itemName = items[i].getElementsByTagName("name")[0].textContent;
        const itemQty = items[i].getElementsByTagName("quantity")[0].textContent;
        itemList += <li>${itemName} x ${itemQty}</li>;
        }
        orderTable += <tr> <td>${orderID}</td> <td>${orderDate}</td> <td><ul>${itemList}</ul></td> </tr> ;
        }
        orderTable += `
        </tbody>
      </table>
    `;
  }
  
  console.log(`
    Name: ${name}
    Address: ${address}
    Phone: ${phone}
    Email: ${email}
    Orders: ${orderTable}
  `);
  }
}  
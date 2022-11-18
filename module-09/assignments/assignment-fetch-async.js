function stringToNode(html) {
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function displayData(xmlDoc) {
    const tableElement = document.getElementById(`customers`);

    const customerNodes = xmlDoc.getElementsByTagName(`customer`);
    for (let index = 0; index < customerNodes.length; index++) {
        const customerNode = customerNodes[index];
        let email = "";
        if (customerNode.getElementsByTagName(`email`)[0] != null) {
            email = customerNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
        }
        const tableItem = stringToNode(
            `<tr>
              <td>${customerNode.getAttribute("custID")}</td>
              <td>${customerNode.getElementsByTagName(`name`)[0].getAttribute("title")}</td>
              <td>${customerNode.getElementsByTagName(`name`)[0].childNodes[0].nodeValue}</td>
              <td>${customerNode.getElementsByTagName(`address`)[0].childNodes[0].nodeValue}</td>
              <td>${customerNode.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue}</td>
              <td>${email}</td>
              <td><table class="innerTable">
                    <tr>
                      <th>Order ID</th>
                      <th>Order Date</th>
                      <th>Items</th>
                    </tr>
                    <tr>
                      <td>${customerNode.getElementsByTagName(`orders`)[0].getElementsByTagName(`order`)[0].getAttribute("orderID")}</td>
                      <td>${customerNode.getElementsByTagName(`orders`)[0].getElementsByTagName(`order`)[0].
                getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue}
                      </td>
                      <td>
                        <table class="innerTable">
                          <tr>
                            <th>Item Price</th>
                            <th>Item quantity</th>
                          </tr>
                          <tr>
                            <td>${customerNode.getElementsByTagName(`orders`)[0].getElementsByTagName(`order`)[0].
                getElementsByTagName(`items`)[0].getElementsByTagName(`item`)[0].
                getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue}
                            </td>
                            <td>${customerNode.getElementsByTagName(`orders`)[0].getElementsByTagName(`order`)[0].
                getElementsByTagName(`items`)[0].getElementsByTagName(`item`)[0].
                getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
            </tr>`);
        tableElement.appendChild(tableItem);
    }
    console.log(customerNodes.length)
}

const main = async () => {
  const response = await fetch("customers-assignment.xml");
  const str = await response.text();
  const xmlData = new DOMParser().parseFromString(str, "text/xml");
  displayData(xmlData);
};

main();
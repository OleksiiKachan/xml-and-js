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
  function displayData(xmlDoc) {
    const list = document.getElementById("customerList");
    const customersNodes = xmlDoc.getElementsByTagName(`customer`);
    for(let index=0;index<customersNodes.length;index++)
    {
        const customerDetails = customersNodes[index];
        const custID = customerDetails.getAttribute(`custID`);
        const title = customerDetails.getElementsByTagName(`name`)[0].getAttribute(`title`);
        const name = customerDetails.getElementsByTagName(`name`)[0].childNodes[0]
        .nodeValue;
        const address = customerDetails.getElementsByTagName(`address`)[0].childNodes[0]
        .nodeValue;
        const phone = customerDetails.getElementsByTagName(`phone`)[0].childNodes[0]
        .nodeValue;
        const orderdate = customerDetails.getElementsByTagName(`orderDate`)[0].childNodes[0]
        .nodeValue;
        const orderID = customerDetails.getElementsByTagName(`order`)[0].getAttribute(`orderID`);
        const orderBy = customerDetails.getElementsByTagName(`order`)[0].getAttribute(`orderBy`);
        const itemprice = customerDetails.getElementsByTagName(`itemPrice`)[0].childNodes[0]
        .nodeValue;
        const itemqty = customerDetails.getElementsByTagName(`itemQty`)[0].childNodes[0]
        .nodeValue;
        var Email = "";
        if(customerDetails.getElementsByTagName(`email`)[0]!= null)
             Email = customerDetails.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
        else
            Email = "Not Gievm";

        const htmlstring=`<h3>Customer: ${index +1}</h3>
        <div>
             <p>Customer ID: ${custID}</p>
             <h2>Name: ${title+ " " + name}</h2>
             <p>Address: ${address}</p>
             <p>Phone: ${phone}</p>
             <p>Email: ${Email}</p>
             <p>Orders:  
                <ul>
                <li><p>  Order Id:  ${orderID}</p></li>
                <li><p>  Order By:  ${orderBy}</p></li>
                <li><p>  Order Date:  ${orderdate}</p></li>
                </ul>
                <p>
                 Items: 
                        <ul style="star">
                            <li> <p> itemsPrice:  ${itemprice}</li></p>
                            <li> <p>  itemsQty:  ${itemqty}</p>  </li>
                        </ul>
                </p>
            </li>
        </div>`;

        const value= list.innerHTML + htmlstring;
        list.innerHTML = value;
    }
}
xhr("customers.xml").then(displayData);
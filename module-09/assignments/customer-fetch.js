fetch("customers.xml")
  .then((response) => response.text())
  .then((str) => new DOMParser().parseFromString(str, "text/xml"))
  .then(displayData);

  function stringToNode(html){
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function displayData(xmlDoc){
    const listElement = document.getElementById(`customers`);

    const customerNodes = xmlDoc.getElementsByTagName(`customer`);
    for (let index = 0; index < customerNodes.length; index++) {
        const customerNode = customerNodes[index];
        const customerID = customerNode.getAttribute('custID');
        const customerTitle = customerNode.getElementsByTagName(`name`)[0].getAttribute(`title`);
        const customerName = customerNode.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
        const customerAddress = customerNode.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
        const customerPhone = customerNode.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;
        
        var customerEmail = "";
        if(customerNode.getElementsByTagName(`email`)[0]!=null){
            customerEmail = customerNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
        }
        else{
            customerEmail = "No email";
        }
        const orderID = customerNode.getElementsByTagName(`order`)[0].getAttribute(`orderID`);
        const orderBy = customerNode.getElementsByTagName(`order`)[0].getAttribute(`orderBy`);
        
        const orderDate = customerNode.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue;
        const itemPrice = customerNode.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue;
        const itemQty = customerNode.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue;
        const htmlPage = `<h1>Customer Name : ${customerTitle + " " + customerName}</h1>
                        <ul>
                            <li><p>Customer Id : ${customerID}</p></li>
                            <li><p>Address : ${customerAddress} </p></li>
                            <li><p>Phone : ${customerPhone}</p></li>
                            <li>Email : ${customerEmail}</li>
                            <li><b>Orders :</b>
                                <p>Order ID : ${orderID}</p>
                                <p>Order By : ${orderBy}</p>
                                <p>Order Date : ${orderDate}</p> 
                                <p>
                                    <b>Items : </b>
                                    <ul>
                                        <li>Item Price : ${itemPrice}</li>
                                        <li>Item Quantity : ${itemQty}</li>    
                                    </ul>
                                </p>   
                            </li>
                        </ul>
                        <hr>`;
        const page = listElement.innerHTML + htmlPage;
        listElement.innerHTML = page;
    }
}
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


    function parseCustomers(xml){
        const name=xml.getElementsByTagName('name')[0].childNodes[0].nodeValue;
        const address=xml.getElementsByTagName('address')[0].childNodes[0].nodeValue;
        const phone=xml.getElementsByTagName('phone')[0].childNodes[0].nodeValue;
        const orderDate=xml.getElementsByTagName('orderDate')[0].childNodes[0].nodeValue;
        const itemPrice=xml.getElementsByTagName('itemPrice')[0].childNodes[0].nodeValue;
        const itemQty=xml.getElementsByTagName('itemQty')[0].childNodes[0].nodeValue;

        const custID=xml.getAttribute(`custID`);
        const title=xml.getElementsByTagName('name')[0].getAttribute(`title`);
        const orderID=xml.getElementsByTagName('order')[0].getAttribute(`orderID`);
                

        return {
                name,
                address,
                phone,
                orderDate,
                itemPrice,
                itemQty,
                custID,
                title,
                orderID
            };
        }


    function createCustomers(customers){
        const content = `
        <li>
            <article>

            <div><h3>Name: ${customers.name} --- ${customers.custID}</h3></div>
            <div><h4>Title: ${customers.title}</h4></div>
            <div>phone: ${customers.phone}</div>
            <div>address: ${customers.address}</div>
            <br>
            
            <div>order ID: ${customers.orderID}</div>
            <div>order date: ${customers.orderDate}</div>
            <div>item Price: ${customers.itemPrice}</div>
            <div>itemQty: ${customers.itemQty}</div>
            <br>



            </article>

        </li>
        `;

        return stringToNode(content);
      };

      function displayData(xmlDoc){
        const list=document.getElementById('list');
    
        const customer = xmlDoc.getElementsByTagName('customer');
    
        for(let index = 0; index < customer.length; index++){
            const customers = customer[index];
    
            const parsedCustomers=parseCustomers(customers);
    
            const customerElement=createCustomers(parsedCustomers);
            list.appendChild(customerElement);
            }
        }

        xhr("customers.xml").then(displayData)

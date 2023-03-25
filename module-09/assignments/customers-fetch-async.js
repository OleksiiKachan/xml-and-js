function stringToNode(html) {
     const template = document.createElement(`template`);
     html = html.trim(); 
     template.innerHTML = html;
     return template.content.firstChild;
   }

   function createCustomers(customers) {
     const content = `
     <tr>
     <td>${customers.cust_id}</td>
     <td>${customers.title} ${customers.name}</td>
     <td>${customers.address}</td>
     <td>${customers.phone}</td>
     <td>${customers.email}</td>
     <td>
       <ul>
         <li>OrderID: ${customers.orderID}</li>
         <li>OrderBy: ${customers.orderBy}</li>
         <li>OrderDate: ${customers.orderDate}</li>
       </ul>
     </td>
     <td>
       <ul>
         <li>Item price: ${customers.itemPrice}</li>
        <li>Item quantity: ${customers.itemQty}</li>
       </ul
     </td>
   </tr>
     `;

     return stringToNode(content);
   }

   function parseCustomers(xml){
     const cust_id = xml.attributes[0].nodeValue;
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
         var email = "No email for the given customer";
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
       cust_id,
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

   function displayData(xmlDoc) {
     const customers_data = xmlDoc.getElementsByTagName(`customer`);
     const list = document.getElementById(`customer_detail`);

     for (let index = 0; index< customers_data.length; index++) {
       const cElement = customers_data[index];
       const parsedCustomers = parseCustomers(cElement);

       const customersElement= createCustomers(parsedCustomers);
       list.appendChild(customersElement);
     }
   }

   const loadData = async () => {
     const response = await fetch("customers.xml");
     const str = await response.text();
     const xmlData = new DOMParser().parseFromString(str, "text/xml");
     displayData(xmlData);
   };

   loadData();
const xhr = (url, method = "GET") =>
new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseXML);
          }
        };
})
        xhttp.open(method, url);
        xhttp.send();

        function displayData(xml) {
            const displayElement = document.getElementById(`customers`);
            const xmlDoc = xml;             
            const customerNodes = xmlDoc.getElementsByTagName("customer");

           for (let index = 0; index < customerNodes.length; index++) {
                const customer = customerNodes[index];
                const displayItem = document.createElement(`li`);

                const id = document.createElement(`h3`);
                id.appendChild(
                    document.createTextNode(
                        customer.getAttribute(`custID`))
                );
                displayItem.appendChild(id);

                const subtitle = document.createElement(`p`);
                subtitle.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("name")[0].childNodes[0]
                            .nodeValue)
                );
                displayItem.appendChild(subtitle);

                const custAdd = document.createElement(`p`);
                custAdd.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("address")[0].childNodes[0]
                            .nodeValue)
                );
                displayItem.appendChild(custAdd);

                const cphone = document.createElement(`p`);
                cphone.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("phone")[0].childNodes[0]
                            .nodeValue)
                );
                displayItem.appendChild(cphone);

                const cemail = document.createElement(`p`);
                cemail.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("email")[0].childNodes[0]
                            .nodeValue)
                );
                displayItem.appendChild(cemail);

                const cOrderDate = document.createElement(`p`);
                cOrderDate.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("orderDate")[0].childNodes[0]
                            .nodeValue)
                 );
                 displayItem.appendChild(cOrderDate);

                 const cItemPrice = document.createElement(`p`);
                 cItemPrice.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("itemPrice")[0].childNodes[0]
                            .nodeValue)
                 );
                 displayItem.appendChild(cItemPrice);

                 const cItemQty = document.createElement(`p`);
                 cItemQty.appendChild(
                    document.createTextNode(
                        customer.getElementsByTagName("itemQty")[0].childNodes[0]
                            .nodeValue)
                 );
                 displayItem.appendChild(cItemQty);

                displayElement.appendChild(displayItem);
            } 
        }
        xhr(`customers.xml`).then(displayData);
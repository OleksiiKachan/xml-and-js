

///--------------------------------------------------------------------------------------------////

function stringToNode(html) { ///Burası 3.Step creating empty template and cards
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function createCard(card) {
    const content = `<li>
                        <article>
                            <p>Name :${card.name}</p>
                            <p>Address :${card.address}</p>
                            <p>Phone :${card.phone}</p>
                            <p>Email: ${card.email}</p>
                            <p>Order Date :${card.orderDate}</p>
                            <p>Item Price: ${card.itemPrice}</p>
                            <p>Quantity :${card.itemQty}</p>
                                                    
                        </article>
                    </li>`;                        
return stringToNode(content); 
}      
////----------------------------------------------------------------------------------                                        
                            
function parseCard(xml) {    //Burada aslında 2.step başlıyor, dataları okumaya başlıyoruz.

const name =
  xml.getElementsByTagName(`name`)[0].childNodes[0].nodeValue;
const address =
  xml.getElementsByTagName(`address`)[0].childNodes[0].nodeValue;
const phone =
  xml.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue;
const email =
  xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
const orderDate =
  xml.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue;
const itemPrice =
  xml.getElementsByTagName(`itemPrice`)[0].childNodes[0].nodeValue;
const itemQty =
  xml.getElementsByTagName(`itemQty`)[0].childNodes[0].nodeValue;
return {
   name, address, phone, email, orderDate, itemPrice, itemQty
};
}                                   

function displayData(xmlDoc) {    ///4.Step; Burada son adım, display
const cards = xmlDoc.getElementsByTagName("customer"); //burada ki customer diğer dosyadan geliyor unutma
                                                        //yukarıda yarattığım boş kartın içini burada doldur diyorum.

const list = document.getElementById(`customers`); //Bu customers yukarıda tanımladığım id.

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];     //indexi takip edip her bir elementi tanımlıyor
  const parsedCard = parseCard(element);  //elementi parse ediyor

  const cardElement = createCard(parsedCard); //parse ettiği elementleri create fonksiyonunu çağırıp yazdırma biçimni uyguluyor
  list.appendChild(cardElement); //Yukarıda ol de id= customers demiştik. Buna list adını verdik tekrardan.
                                //bu ol ye yani lşst adını verdiğimiz ol ye li ekliyoruz.  Bu li de create fonksiyonunda 
                                //şekil almış parsecard fonksiyonunda geçmiş her bir element.
}
}

const loadData = async () => {
    const response = await fetch("Assignment_Aycan_Lizor.xml");
    const str = await response.text();
    const xmlData = new DOMParser().parseFromString(str, "text/xml");
    displayData(xmlData);
  };
  
  loadData();


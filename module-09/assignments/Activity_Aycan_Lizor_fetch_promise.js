
function stringToNode(html) { ///Burası 3.Step creating empty template and cards
   const template = document.createElement(`template`);
   html = html.trim();
   template.innerHTML = html;
   return template.content.firstChild;
 }

 function createCard(card) {
   const content = `<li>
<article>
<p>${card.id}</p>
<p>${card.first_name}<p>
<p>${card.last_name}<p>
<p>${card.email}<p>
<p>${card.gender}<p>
<p>${card.ip}<p>

</article>
</li>`;

return stringToNode(content); //Burada aslında 2.step başlıyor, dataları okumaya başlıyoruz.
 }

 function parseCard(xml) {
   const id = xml.getElementsByTagName(`id`)[0].childNodes[0].nodeValue;
   const first_name = xml.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue;
   const last_name = xml.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue;
   const email = xml.getElementsByTagName(`email`)[0].childNodes[0].nodeValue;
   const gender = xml.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue;
   const ip = xml.getElementsByTagName(`ip`)[0].childNodes[0].nodeValue;

   return {
     id, first_name, last_name, email, gender, ip          
   };
 }



 function displayData(xmlDoc) {    ///4.Step; Burada son adım, display
   const cards = xmlDoc.getElementsByTagName(`person`);

   const list = document.getElementById(`people`);

   for (let index = 0; index < cards.length; index++) {
     const element = cards[index];//cards dediğimiz şey xml dosyasındaki <person< tagı index ile
     const parsedCard = parseCard(element); //bu fonksiyonu yukarıda yazdık, verileri okuma fonksiyonu

     const cardElement = createCard(parsedCard);//html de nasıl yazılacağını belirrtiğimiz yer
     list.appendChild(cardElement);
   }
 }

 fetch("Activity_Aycan_Lizor.xml")
 .then((response) => response.text())
 .then((str) => new DOMParser().parseFromString(str, "text/xml"))
 .then(displayData);



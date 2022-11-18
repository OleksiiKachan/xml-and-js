const xhr = (url , method = "GET") => 

new Promise((resolve) => {

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    resolve(this);
  }
};
xhttp.open(mthod, url);
xhttp.send();
});

function stringToNode(html) {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function createCard(card) {
  const content = `<li>
<article>
<div><p>${card.category}</p></div>
<h2>${card.title}</h2>
<h3>${card.authors}</h3>
<p >Book was written in ${card.year}</p>
<p>Retail price is: ${card.price}</p>
</article>
</li>`;

/* <div>
${card.balance} ${card.currency}
</div> */
  return stringToNode(content);
}

function parseCard(xml) {
  const author = xml.getElementsByTagName(`authorname`);
  const author1="";
  const category =
    xml.getElementsByTagName(`category`)[0].childNodes[0].nodeValue;
  const title =
    xml.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;
  const authors =
    xml.getElementsByTagName(`authorname`)[0].childNodes[0].nodeValue;
    for (let index = 1; index < author.length; index++) {
  const author1 = authors + ", " +
    xml.getElementsByTagName(`author`)[0].childNodes[index].nodeValue;
  }
  console.log(author1)
  const year =
    xml.getElementsByTagName(`year`)[0].childNodes[0].nodeValue;
    const price =
    xml.getElementsByTagName(`price`)[0].childNodes[0].nodeValue;

  return {
    category,
    title,
    authors,
    year,
    price
  };
}

function displayData(xmlDoc) {
  const cards = xmlDoc.getElementsByTagName(`book`);

  const list = document.getElementById(`cards`);

  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    const parsedCard = parseCard(element);

    const cardElement = createCard(parsedCard);
    list.appendChild(cardElement);
  }
}
xhr("GET", "test.xml").then((data) => displayData(responseXML));
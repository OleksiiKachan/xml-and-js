
    const xhr = (url, method ="GET") =>
    new Promise ((resolve) => {
        const xhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this);
      }
  
    };
    xhttp.open("GET", "people.xml", true);
    xhttp.send();
});

    function stringToNode(html) {
    }
    function createPeople(people){

    }
    function parsePeople(xml){

    }
    function displayData(xmlDoc){

    }

    xhr('people.html').then(displayData);

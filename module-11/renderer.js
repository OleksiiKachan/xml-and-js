const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  let source = data;

  const withFilters = Boolean(window.location.search);//Filtre calistiginda 'true' degeri donuyor
  //console.log(withFilters);                           //filtre calismadan önce 'false' donuyor
  

  if (withFilters) {
    const params = new URLSearchParams(window.location.search);//URLSearchParams objesi yaratiyoruz
    const nameTerm = params.get("name").toLowerCase(); // burada actual value elde ettik, büyük harfle yazsak bile filter çalışacak
    const inputControl = document.getElementById("input-name-term");
    inputControl.value = nameTerm;

    //her seferinde filter çalıştırdığımızda datalar tekrar yüklenir, sadece 1 kez fetch yapmak daha mantıklı
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));//source daki yani data.json daki datanin
    //icinde ki namelerin hepsini filitrele ve içinde nameTerm olanları al.
  }

  const rows = source.reduce((acc, { id, name, value }) => //accumule ederek filtrelenmis datalari tablo seklinde duzenle
      acc +`<tr><td>${id}</td><td>${name}</td><td>${value}</td></tr>`,``
  ); // burada   <tr id="table-row-${id}"> vardi ben sadelestirdim. 

  tableBody.innerHTML = rows; //duzenledigin tabloyu html'e yazdir

  //console.log(`data rendered`);
};

fetch(`./data.json`) 
  .then((data) => data.json()) //fetch string aliyor, busnu json cevirmek gerekli
  .then((data) => { //aldigin datayi renderTable() fonksiyonuna gonder, yani datalari tabloya yaz
    renderTable(data);
    //console.log(`data loaded`);
  });

const onReset = () => {
  window.location.replace(window.location.pathname);
};

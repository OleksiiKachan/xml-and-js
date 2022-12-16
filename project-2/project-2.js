fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_crawTGoeeBUtM81OxrNEC9tzejezZAJl52FH0p2n7pqIvZmKmQAfXshTWYUkPUqu")
var token = 'live_crawTGoeeBUtM81OxrNEC9tzejezZAJl52FH0p2n7pqIvZmKmQAfXshTWYUkPUqu';
let _data = [];

const getlogos = async (token, term) => {
  const result = await fetch(
    `https://api.thecatapi.com/v1/images/search?query=${term}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
   
  );
   _data = await result.json();
  return _data.images ;
};

const renderHTML =  (term) => {
  const htmlBody = document.getElementById("genres");
  let source = _data;
  if (term) { 
      htmlBody.innerHTML = "";
        source.map(({id, url})=>{
        let html = `
        
        <img class="icon" src="${url}"/> 
        
        
        <div class="domain">Id: ${id}</div>
   
    
        `; 
        htmlBody.insertAdjacentHTML("beforeend", html);
      })
  }
  else
  {
    htmlBody.innerHTML = "";
        let html = `
        <div class="card">
        </div>
        `;
        htmlBody.insertAdjacentHTML("beforeend", html);
  }
};
 console.log(`data rendered`);
const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.term.value;
  getlogos(token , term);
  renderHTML(term);
};

const onReset = () => {
  renderHTML();
};
fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_crawTGoeeBUtM81OxrNEC9tzejezZAJl52FH0p2n7pqIvZmKmQAfXshTWYUkPUqu").then((data)=>{
  //console.log(data);
  return data.json();
}).then((objectData)=>{
  //console.log(objectData[0].breeds[0].name);
  //console.log(objectData);
  let tableData="";
  objectData.map((values)=>{
    tableData+=`<tr>
    <td>${values.height}</td>
    <td>${values.id}</td>
    <td><img src="${values.url}"/></td>
    <td>${values.width}</td>
    <td>${values.breeds[0].name}</td>
  </tr>`;
  });
  document.getElementById("table_body").
  innerHTML=tableData;
})
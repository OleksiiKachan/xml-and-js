var token   ='sk_4a77f97309d5917261bf1a9f1fa700dd';
let _data = [];

const getlogos = async (token, term) => {
  const result = await fetch(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${term}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
   _data = await result.json();
  return _data.companies ;
};

const renderHTML =  (term) => {
  const htmlBody = document.getElementById("genres");
  let source = _data;
  if (term) { 
      htmlBody.innerHTML = "";
        source.map(({name, logo, domain})=>{
        let html = `
        <div class="main">
        <div>
        <img class="icon" src="${logo}"/> 
        </div>
        <div class="card">
        <h2 class="name">Name: ${name}</h2>
        </div>
        <div class="domain">Domain: ${domain}</div>
   
    </div>
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



const API_KEY = 'c1a7d1b4'


const getResults = (searchQuery)=>{
    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("results");
    list.innerHTML = "";
    data.Search.map((item) => {

            const html = `
                <div class="card">
                    <img id="mainImage" src="${item.Poster}" alt="${item.Title}"/>
                    <h4>${item.Title}</h4>

                </div>
            `;

            list.insertAdjacentHTML("beforeend", html); 
    });
  })
    
}
const onSubmit = (event) => {
    event.preventDefault();
    const term = event.target.term.value;
    console.log("im term",term)
    getResults(term)
};

const onReset = () => {
    getResults('title')
};
getResults('title')
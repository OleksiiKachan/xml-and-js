
const api_url = "http://api.mediastack.com/v1/news?access_key=f910208583789ff187d956563c5e20e0&countries=us";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data);
if (response) {
hideloader();
}
show(data);
}
// Calling that async function
getapi(api_url);
//Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
let tab = 
`<h1><center> Breaking news</center></h1><hr>`;

// Loop to access all rows 
for (let r of data.data) {
tab += 
`<li>
<article>
<div id="left">
<h2>${r.title}</h2>

<p>${r.description}....
<a href="${r.url}">Read more....</a>.</p>
<h3> Author :${r.author}   <br> 
Source: ${r.source} & publish at : ${r.published_at}
</h3>

<div id="head">
<h4>${r.category}<br>
${r.country}/${r.language} </h4></div>
</div>

<img src="${r.image}" alt="Loading.......">

</article>
</li><hr>`;
}
// Setting innerHTML as tab variable
document.getElementById("news").innerHTML = tab;
}
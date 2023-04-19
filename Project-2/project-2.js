const apikey='1ff1050';

const getMovieDetails = async(title) => {
  const result = await fetch(
    `http://www.omdbapi.com?apikey=${apikey}&t=${title}`,
    {
      method: "GET",
    }
  );
  const data = await result.json();
  console.log(data)
  return data;  
}

const generateHTML = async(title) => {
  const data = await getMovieDetails(title);
  if(data.Response === 'False') {
    return alert(`Can not find ${title}`);
  }
  const movie = document.getElementById(`movie`);
  movie.innerHTML = '';
  let details = '';
  for (const [key, value] of Object.entries(data)) {
    if(['Poster', 'Title', 'Ratings'].indexOf(key) === -1) {
      details += `<p>${key}: ${value}</p>`;
    }
  }
  const html = `<div class="movie-card">
  <h2> ${data.Title}</h2>
  <img src="${data.Poster}"/>
  <article class=details>
  ${details}
  </article>
  </div>`;
  movie.insertAdjacentHTML("beforeend", html);
}

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  generateHTML(term);
};


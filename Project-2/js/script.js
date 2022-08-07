//searching:-i=IMDBID--s=movietile--page=pageno
const searchinput = document.getElementById('searchinput');
const searchList = document.getElementById('search-list');
const outputGrid = document.getElementById('output-grid');
const apikey="bc5f87fd";
// load movies from API
async function loadMovies(search){
    const URL = `https://omdbapi.com/?s=${search}&apikey=${apikey}`; 
    const res = await fetch(`${URL}`);
    const data = await res.json();
    //console.log(data);
    if(data.Response == "True") 
        displayMoviesList(data.Search);
}

function findMovies(){
    let search = (searchinput.value).trim();
    if(search.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(search);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMoviesList(movies){   //Suggestion based on the string entered in search Box
    searchList.innerHTML = "";
    for(let i = 0; i < movies.length; i++){
        let moviesList = document.createElement('div');
        moviesList.dataset.id = movies[i].imdbID; 
        moviesList.classList.add('search-list-item');
            moviePoster = movies[i].Poster;
        moviesList.innerHTML = `
        <div class = "poster">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-info">
            <h3>${movies[i].Title}</h3>
            <p>${movies[i].Year}</p>
        </div>
        `;
        searchList.appendChild(moviesList);
    }
    loadMoviesDetails();
}

function loadMoviesDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            searchinput.value = "";
            const output = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=${apikey}`);
            const movieDetails = await output.json();
          //  console.log(movieDetails);
            displayMoviesDetails(movieDetails);
        });
    });
}

function displayMoviesDetails(details){  //For displaying search Results
    outputGrid.innerHTML = `
    <div class = "movie-poster">
        <img src = "${details.Poster}">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">Title: ${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Summary:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
    </div>
    `;
}

window.addEventListener('click', (event) => { //hiding search list on click
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});
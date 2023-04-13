const clientId = '571015b0669d4b288cdb6c8a19d0299d';
const clientSecret = '79eeaf7f3ab44d4cafdcb4abe107874b';

let _data = [];

const getToken = async () => {
	const result = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
		},
		body: 'grant_type=client_credentials',
	});

	const data = await result.json();
	return data.access_token;
};

const getTracks = async (token, playlistId) => {
	const result = await fetch(
		`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
		{
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		}
	);

	const data = await result.json();
	return data.items;
};

const getGenres = async (token) => {
	const result = await fetch(
		`https://api.spotify.com/v1/browse/categories?locale=sv_US`,
		{
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		}
	);

	const data = await result.json();
	return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
	const limit = 5;

	const result = await fetch(
		`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
		{
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		}
	);

	const data = await result.json();
	return data.playlists.items;
};

const TrackUI = (tracks) => {
	return tracks
		.map(({ track: { name, artists } }) => {
			const artistsList = artists
				.map((artist) => `${artist.name}`)
				.join(', ');
			return `<div style="margin-bottom:0.5rem; color:black">${name} - ${artistsList}</div>`;
		})
		.join(``);
};

const loadGenres = async () => {
	const token = await getToken();
	const genres = await getGenres(token);
	for (const {
		name,
		id,
		icons: [icon],

	} of genres) {
		const playlists = await getPlaylistByGenre(token, id);
		const tracks = await Promise.all(
			(playlists ?? []).map(
				async ({
					id,
					name,
					external_urls: { spotify },
					images: [image],
				}) => {
					const tracks = await getTracks(token, id);
					console.log("---"+tracks)
					return {
						name,
						external_urls: { spotify },
						images: [image],
						tracks,
					};
				}
			)
		);
		_data.push({ name, icons: [icon], playlists: tracks });
	}
};

const renderGenres = (filterTerm) => {
	let source = _data;

	if (filterTerm) {
		console.log(filterTerm);
		const term = filterTerm.toLowerCase();
		source = source.filter(({ name }) => {
			console.log(name.toLowerCase().includes(term));
			return name.toLowerCase().includes(term);
		});
	}
	const list = document.getElementById(`genres`);
	const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
		const playlistsList = playlists
			.map(
				({ name, external_urls: { spotify }, images: [image] ,tracks}) => `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
		  			<div style="max-height: 150px; overflow-y:auto">
 								${TrackUI(tracks)}
 								</div>				
        </li>`
			)
			.join(``);

		if (playlists) {
			return (
				acc +
				`
      <article class="genre-card">
      <h2>${name}</h2>
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          
          <ol>
            ${playlistsList}
          </ol>
        </div>
      </article>`
			);
		}
	}, ``);

	list.innerHTML = html;
};


loadGenres().then(renderGenres);

const onSubmit = (event) => {
	event.preventDefault();

	const term = event.target.term.value;
	console.log(term);

	renderGenres(term);
};
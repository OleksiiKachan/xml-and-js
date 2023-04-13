// Name: Wenhao Fang
// ID: N01555914

//#region Glbal Arguments
const client_Id = "910e59ec1184482d8932ab9e1bc3ff8d";
const client_Secret = "02f3d3633013444f86f33305092dcfb5";
const url_Token = "https://accounts.spotify.com/api/token";
const url_GenreUS = "https://api.spotify.com/v1/browse/categories?locale=sv_US";
const url_Playlist =
  "https://api.spotify.com/v1/browse/categories/{category_ID}/playlists";

const limit_Genre = 5;
const limit_Playlist = 5;
const limit_Track = 2;

const display_div = document.getElementById(`display`);
let _genreData = [];

//#endregion

//#region Handle Data

const getTotken = async (urlToken, clientID, clientSecret) => {
  const response = await fetch(urlToken, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(clientID + ":" + clientSecret)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

const getGenreList = async (urlGenre, token, genreLimit = 10) => {
  const reponse = await fetch(urlGenre + "&limit=" + genreLimit, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await reponse.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (
  urlPlaylist,
  token,
  category_ID,
  playlistLimit = 10
) => {
  let url = urlPlaylist.replace("{category_ID}", category_ID);

  const response = await fetch(url + "?limit=" + playlistLimit, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });
  const data = await response.json();
  return data.playlists.items;
};

const getTrackListByPlaylist = async (urlTrack, token, trackLimit = 10) => {
  //   console.log(trackUrl);
  const response = await fetch(urlTrack + "?limit=" + trackLimit, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });

  const data = await response.json();
  return data.items;
};

//#endregion

//#region Html

const htmlGenre = (iconUrl, name, playlistHtml) => {
  //   console.log(iconUrl);
  return `
    <article class="genre">
        <div class="genre-header">
            <img src="${iconUrl}" width=80 height=80 alt="${name}"/>
            <div class="genre-title">${name}</div>
        </div>
        <ol class="playlist-list">
            ${playlistHtml}
        </ol>
    </article>`;
};

const htmlPlaylist = (name, imgUrl, herf, trackListHtml) => {
  //   console.log(imgUrl);
  return `
    <li class="playlist">
        <div class="playlist-header">
            <img src="${imgUrl}" width="80" height="80 alt="${name}"/>
            <a class="playlist-title" href="${herf}" alt="${name}" target="_blank">${name}</a>
        </div>
        <ul class="track-list">
            ${trackListHtml}
        </ul>
    </li>
      `;
};

const htmlTrack = (trackName, artists) => {
  //   console.log("trackName", trackName);
  //   console.log("artists", artists);
  return `
    <li class="track">
        <div class="track-name">${trackName}</div>
        <div class="artist">${artists}</div>
    </li>
    `;
};

//#endregion

//#region Main
const loadData = async () => {
  const token = await getTotken(url_Token, client_Id, client_Secret);
  const genres = await getGenreList(url_GenreUS, token, limit_Genre);
  _genreData = genres;
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlist = await getPlaylistByGenre(
      url_Playlist,
      token,
      id,
      limit_Playlist
    );

    // console.log(playlist);

    // foreach playlist: 1. get tracklist; 2. get tracklist html, 3.add tracklist html into playlist html, 4 return
    // the use of promise all because the html has to wait all track html created by each async, otherwise, it return pending.
    const playlist_html = await Promise.all(
      playlist.map(
        async ({
          name,
          external_urls: { spotify },
          images: [image],
          tracks: { href },
        }) => {
          // 1.get tracklist;
          const trackList = await getTrackListByPlaylist(
            href,
            token,
            limit_Track
          );
          //   console.log("trackList", trackList);

          // 2. get tracklist html,
          const trackList_html = trackList
            .map(({ track: { artists, name } }) =>
              htmlTrack(
                name,
                artists.map(({ name }) => name)
              )
            )
            .join(``);
          // console.log(trackList_html);

          //   3.add tracklist html into playlist html,
          const result = htmlPlaylist(name, image.url, spotify, trackList_html);
          // console.log(result);

          return result;
        }
      )
    ).then((arr) => arr.join(``));
    // console.log(playlist_html);

    if (playlist_html) {
      //   console.log(icon.url);
      const html = htmlGenre(icon.url, name, playlist_html);
      display_div.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadData();

//#endregion

//#region Test

const onSubmit = async (event) => {
  event.preventDefault();
  // console.log("onSubmit");
  const genreName = event.target.genreSearch.value;
  console.log("genreName", genreName);

  if (genreName) {
    const genreList = filterGenre(genreName, _genreData);
    console.log("genreList", genreList);
    display_div.innerHTML = "";
    htmlDisplayByGenre(genreList);
  }
};

const filterGenre = (genreName, jsonData) => {
  console.log("filterGenre", genreName);
  console.log("filterGenre", jsonData);
  const result = jsonData.filter(
    ({ name }) => name.toLowerCase().includes(genreName.toLowerCase())
    // console.log(name.toLowerCase().includes(genreName.toLowerCase()));
  );
  // console.log("filterGenre", jsonData);
  return result;
};

const onReset = () => {
  loadData();
};

/**
 *  Get all html for diplay
 * @param {*} genreList Filtered of all genre List
 */
const htmlDisplayByGenre = async (genreList) => {
  const token = await getTotken(url_Token, client_Id, client_Secret);
  console.log(genreList);
  genreList.map(async ({ name, id, icons: [icon], href }) => {
    const playlist = await getPlaylistByGenre(
      url_Playlist,
      token,
      id,
      limit_Playlist
    );

    // console.log(playlist);

    // foreach playlist: 1. get tracklist; 2. get tracklist html, 3.add tracklist html into playlist html, 4 return
    // the use of promise all because the html has to wait all track html created by each async, otherwise, it return pending.
    const playlist_html = await Promise.all(
      playlist.map(
        async ({
          name,
          external_urls: { spotify },
          images: [image],
          tracks: { href },
        }) => {
          // 1.get tracklist;
          const trackList = await getTrackListByPlaylist(
            href,
            token,
            limit_Track
          );
          //   console.log("trackList", trackList);

          // 2. get tracklist html,
          const trackList_html = trackList
            .map(({ track: { artists, name } }) =>
              htmlTrack(
                name,
                artists.map(({ name }) => name)
              )
            )
            .join(``);
          // console.log(trackList_html);

          //   3.add tracklist html into playlist html,
          const result = htmlPlaylist(name, image.url, spotify, trackList_html);
          // console.log(result);

          return result;
        }
      )
    ).then((arr) => arr.join(``));
    // console.log(playlist_html);

    if (playlist_html) {
      //   console.log(icon.url);
      const html = htmlGenre(icon.url, name, playlist_html);
      display_div.insertAdjacentHTML("beforeend", html);
    }
  });
};

//#endregion

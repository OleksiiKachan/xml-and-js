//#region Global Arguments

const CLIENT_ID = "910e59ec1184482d8932ab9e1bc3ff8d";
const CLIENT_SECRET = "02f3d3633013444f86f33305092dcfb5";
const URL_TOKEN = "https://accounts.spotify.com/api/token";
const URL_GENREUS = "https://api.spotify.com/v1/browse/categories?locale=sv_US";
const URL_PLAYLIST =
  "https://api.spotify.com/v1/browse/categories/{category_ID}/playlists";

const LIMIT_GENRE = 5;
const LIMIT_PLAYLIST = 5;
const LIMIT_TRACK = 5;

let _genreData = [];

const display_div = document.getElementById("display");

//#endregion

//#region Get Data

const getToken = async (urlToken, clientID, clientSecret) => {
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

//#region filters
const filterGenre = (genreName, jsonData) => {
  const result = jsonData.filter(
    ({ name }) => name.toLowerCase().includes(genreName.toLowerCase())
    // console.log(name.toLowerCase().includes(genreName.toLowerCase()));
  );
  // console.log("filterGenre", jsonData);
  return result;
};

//#endregion

//#region Html

const htmlGenre = (iconUrl, name, playlistHtml) => {
  // console.log("iconUrl", iconUrl);
  // console.log("name", name);
  // console.log("iconUrl", iconUrl);
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
  // console.log("name", name);
  // console.log("imgUrl", imgUrl);
  // console.log("herf", herf);
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
  // console.log("trackName", trackName);
  // console.log("artists", artists);
  return `
    <li class="track">
        <div class="track-name">${trackName}</div>
        <div class="artist">${artists}</div>
    </li>
    `;
};

//#endregion

//#region Render function
const renderData = async (
  genreList,
  genreName = null,
  isPlaylist = true,
  isTrack = true
) => {
  console.log("Reder Data");

  // filter genres with input genre name
  let source = genreList;
  if (genreName) {
    source = await filterGenre(genreName, genreList);
  }

  // getToken
  const token = await getToken(URL_TOKEN, CLIENT_ID, CLIENT_SECRET);
  // console.log(source);

  // foreach genre
  const html = await Promise.all(
    source.map(async ({ name, id, icons: [icon] }) => {
      let playlistListHtml = ``;
      // if playlist is needed
      if (isPlaylist) {
        // 1.get playlist item list for this genre
        const playlist = await getPlaylistByGenre(
          URL_PLAYLIST,
          token,
          id,
          LIMIT_PLAYLIST
        );

        // generate html of all playlist for this genre
        playlistListHtml = await Promise.all(
          playlist.map(
            async ({
              name,
              external_urls: { spotify },
              images: [image],
              tracks: { href },
            }) => {
              //#region Html Track items
              // 1.get track list
              const trackList = await getTrackListByPlaylist(
                href,
                token,
                LIMIT_TRACK
              );
              // console.log(trackList);

              let trackListHtml = "";
              if (isTrack) {
                // 2. generate html of all tracks for this playlist
                trackListHtml = trackList.reduce(
                  (acc_trackHtml, { track: { artists, name } }) => {
                    acc_trackHtml += htmlTrack(
                      name,
                      artists.map(({ name }) => name).join(", ")
                    );
                    return acc_trackHtml;
                  },
                  ""
                );
              }
              // console.log(trackListHtml);
              //#endregion

              // 3. generate html for this playlist
              return htmlPlaylist(name, image.url, spotify, trackListHtml);
              // console.log(acc_playlistHtml);
            }
          )
        ).then((data) => data.join(""));
      }
      return htmlGenre(icon.url, name, playlistListHtml);
      // console.log(playlistListHtml);
    })
  );
  // console.log(html);
  display_div.innerHTML = html;
};

const loadPage = async () => {
  console.log("Load page");
  const token = await getToken(URL_TOKEN, CLIENT_ID, CLIENT_SECRET);
  const genreList = await getGenreList(URL_GENREUS, token, LIMIT_GENRE);
  _genreData = genreList;

  renderData(genreList);
};

//#endregion

//#region page event

const onSubmit = (event) => {
  console.log("onSubmit");
  event.preventDefault();
  // get genre Name
  const genreName = event.target.genreSearch.value;
  // get radio
  const isPlaylist = event.target.isCheck.value === "true";

  const filterGenreList = filterGenre(genreName, _genreData);
  renderData(filterGenreList, genreName, isPlaylist, false);
};

const onReset = () => {
  console.log("onReset");
  renderData(_genreData);
};

//#endregion

// ----------------------

loadPage();

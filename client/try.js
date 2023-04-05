const clientId = "421d5d36bdd144d48d41b97b806b4e66";
const clientSecret = "e1b3bdf9880d48e786cbdb1da604ef47";

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(Client_ID + ":" + Client_secret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

getToken()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const clientId = `f25aae7f1a8c4b60af857ac03313e8d5`;
const clientSecret = `4c0e46cc619b4695909147f6722a24ea`;

const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });
    const data = await result.json();
  console.log(data);
};
getToken();


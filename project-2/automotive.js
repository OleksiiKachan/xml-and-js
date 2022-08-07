
const getToken = async () => {
  const result = await fetch("https://www.carboninterface.com/api/v1/estimates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cSUOeXNi0XXNrxiL5zOL5A,
    }
  });
  const data = await result.json();
  return data.access_token;
};
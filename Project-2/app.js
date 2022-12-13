
const API_KEY = `0Vqsmhnm7A3DovSlWZ1gQ`;

const getToken = async() => {

  const result = await fetch("https://www.carboninterface.com/api/v1/auth", 
  { 
    method: "POST",
    "Authorization: Bearer + API_KEY"
    "Content-Type: "application/json"
       
  });

  
  const data = await result.json();
  console.log(data);

}


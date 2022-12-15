// const getData = async () => {
//   const response = await fetch(
//     "https://newsdata.io/api/1/news?apikey=pub_14472550e691d8c3247087fd73ba9e1b6207a",
//     {
//       mode: "no-cors",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );

//   var data = await response.json();
//   console.log(data);
// };
// getData();

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_14472550e691d8c3247087fd73ba9e1b6207a&language=en"
)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    loadData(objectData);
  });

loadData = (objectData) => {
  let tableData = "";

  objectData.results.map((values) => {
    tableData += ` <tr>
    <td>${values.title}</td>
    <td>${values.country[0]}</td>
    <td>${values.description}</td>
    <td><img class="image" src="${values.image_url}"alt="Image not Provided" onerror="this.onerror=null;this.src='images.jfif'">
    </td>
  </tr>`;
  });
  document.getElementById("table_body").innerHTML = tableData;
};

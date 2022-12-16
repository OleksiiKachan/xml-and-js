const api_url = "https://6253799f90266e3d0e0373e6.mockapi.io/ok/user";

async function getapi(url) {
  /**
   * load data from https://6253799f90266e3d0e0373e6.mockapi.io/ok/user
   */
  const response = await fetch(url);
    
  var data = await response.json();
  if (response) {
      hideloader();
  }
  show(data);

}
getapi(api_url) ;


function hideloader() {
  document.getElementById('loading').style.display = 'none';
}


function show(data) {
     let tab = 
        `<tr>
          <th>createdAt</th>
          <th>userName</th>
          <th>isSuspended</th>
          <th>email</th>
         </tr>`;
    for (let r of data) {
        tab += `<tr> 
    <td>${r.createdAt} </td>
    <td>${r.userName}</td>
    <td>${r.isSuspended}</td> 
    <td>${r.email}</td>          
</tr>`;
    }
    document.getElementById("dt").innerHTML = tab;
}
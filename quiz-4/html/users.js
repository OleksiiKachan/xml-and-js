// const loadData = () => {
//   /**
//    * load data from https://6253799f90266e3d0e0373e6.mockapi.io/ok/user
//    */
// };

// loadData().then((data) => {
//   /**
//    * render data in html table
//    */
// });

const loadData = async () => {
  const response = await fetch('https://6253799f90266e3d0e0373e6.mockapi.io/ok/user');
  const data = await response.json();
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();
  const headerRow = thead.insertRow();
  const headers = ['ID', 'Name', 'Email', 'Created At'];
  for (const header of headers) {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(header));
    headerRow.appendChild(th);
  }
  for (const user of data) {
    const row = tbody.insertRow();
    const idCell = row.insertCell();
    idCell.appendChild(document.createTextNode(user.id));
    const nameCell = row.insertCell();
    nameCell.appendChild(document.createTextNode(user.userName));
    const emailCell = row.insertCell();
    emailCell.appendChild(document.createTextNode(user.email));
    const createdAtCell = row.insertCell();
    createdAtCell.appendChild(document.createTextNode(user.createdAt));
  }
  document.body.appendChild(table);
};

loadData();


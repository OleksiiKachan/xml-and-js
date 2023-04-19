const loadData  = () => {
  /**
   * load data from https://6253799f90266e3d0e0373e6.mockapi.io/ok/user
   */
 
  return fetch('https://6253799f90266e3d0e0373e6.mockapi.io/ok/user')
    .then(response => response.json());
};

const renderData = (data) => {
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();
  const row = thead.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  
  cell1.innerHTML = "<b>User Name</b>";
  cell2.innerHTML = "<b>Email</b>";
  
  
  data.forEach(user => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
   
    cell1.innerHTML = user.userName;
    cell2.innerHTML = user.email;
    
  });

  const d1 = document.querySelector('#d1');
  d1.appendChild(table);
};

loadData().then(renderData);

// loadData().then((data) => {
//   /**
//    * render data in html table
//    */
//   const renderData = async () => {
//     const data = await loadData();
//     const d1 = document.querySelector('#d1');
//     const ul = document.createElement('ul');
  
//     data.forEach((user) => {
//       const li = document.createElement('li');
//       const userName = document.createElement('span');
//       userName.textContent = `Name: ${user.userName}`;
//       const state = document.createElement('span');
//       state.textContent = `State: ${user.address.state}`;
//       const age = document.createElement('span');
//       age.textContent = `Age: ${user.age}`;
  
//       li.appendChild(userName);
//       li.appendChild(state);
//       li.appendChild(age);
//       ul.appendChild(li);
//     });
  
//     d1.appendChild(ul);
//   };
  
//   renderData();
// });

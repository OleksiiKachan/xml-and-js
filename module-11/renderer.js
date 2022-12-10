const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  let source = data;

  const withFilters = Boolean(window.location.search);

  if (withFilters) {
    const params = new URLSearchParams(window.location.search);
    const nameTerm = params.get(`name`).toLowerCase(); // burada actual value elde ettik, büyük harfle yazsak bile filter çalışacak
    const inputControl = document.getElementById(`input-name-term`);
    inputControl.value = nameTerm;

    //her seferinde filter çalıştırdığımızda datalar tekrar yüklenir, sadece 1 kez fetch yapmak daha mantıklı
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { id, name, value }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${value}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;

  console.log(`data rendered`);
};

fetch(`./data.json`)
  .then((data) => data.json())
  .then((data) => {
    console.log(`data loaded`);
    renderTable(data);
  });

const onReset = () => {
  window.location.replace(window.location.pathname);
};

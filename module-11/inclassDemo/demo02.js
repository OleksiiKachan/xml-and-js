const url = `./data.json`;
let _data_json = [];

const getJson = async (url) => {
  const result = await fetch(url).then((data) => data.json());
  return result;
};

const getSearchStr = async () => {
  let result;

  const queryStr = window.location.search;
  // check if queryStr exist
  const isQuery = Boolean(queryStr);

  if (isQuery) {
    const queryParams = new URLSearchParams(window.location.search);
    result = queryParams.get(`name`).toLowerCase(); //prevent case sensitive
  }

  return result;
};

const filterJson = (search, data) => {
  let result = data;
  if (search) {
    result = result.filter(({ name }) => name.toLowerCase().includes(search));
  }
  return result;
};

const renderData = (data) => {
  const tb_body = document.getElementById("tb-body");

  const rows = data.reduce(
    (acc, { id, name, value }) =>
      acc +
      `<tr id="${id}">
              <td>${id}</td>
              <td>${name}</td>
              <td>${value}</td>
          </tr>`,
    ``
  );
  tb_body.innerHTML = rows;
};

const loadPage = async () => {
  _data_json = await getJson(url);
  // console.log(_data_json);
  const searchStr = await getSearchStr();
  // console.log(searchStr);
  const filterData = await filterJson(searchStr, _data_json);
  // console.log(filterData);
  renderData(filterData);
};

loadPage();

const onSubmit = (event) => {
  console.log("onSubmit");
  event.preventDefault();
  const searchStr = event.target.name.value;

  let dataToRender = _data_json;
  if (searchStr) {
    dataToRender = filterJson(searchStr, _data_json);
  }
  renderData(dataToRender);
};

const onReset = () => {
  renderData(_data_json);
};

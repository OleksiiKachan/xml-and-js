let _symbolsData = [];
let _convertedData = 0;

const getSymbols = async () => {
  const result = await fetch(`https://api.exchangerate.host/symbols`, {
    method: "GET",
  });

  const data = await result.json();
  return data.symbols;
};

const convertCurrency = async ({ from, to, amount }) => {
  const result = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`,
    {
      method: "GET",
    }
  );

  const data = await result.json();
  return data.success ? data.result : 0;
};

const loadSymbols = async () => {
  _symbolsData = await getSymbols();
};

const loadConvertedData = async ({ from, to, amount }) => {
  _convertedData = await convertCurrency({ from, to, amount });
};

const renderSymbols = () => {
  const fromList = document.getElementById(`from-currency-list`);
  const toList = document.getElementById(`to-currency-list`);
  const html = Object.keys(_symbolsData)
    .map((symbol) => `<option value=${symbol}>${symbol}</option>`)
    .join(``);
  fromList.innerHTML = html;
  toList.innerHTML = html;
};

const renderConverted = () => {
  document.getElementById("result").style.display = "block";
  document.getElementById("converted-amount").innerHTML = _convertedData;
};

loadSymbols().then(renderSymbols);

const onSubmit = (event) => {
  event.preventDefault();
  const from = document.getElementById("from-currency-list").value;
  const to = document.getElementById("to-currency-list").value;
  const amount = document.getElementById("amount").value;
  loadConvertedData({ from, to, amount }).then(renderConverted);
};

const onReset = () => {
  document.getElementById("result").style.display = "none";
};

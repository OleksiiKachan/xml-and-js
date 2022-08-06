const access_key = `eb44e69607fdc4959822ad7b09d7fc29`;
const endpoint = `list`;
const url = 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key;

let _data = [];

// fetch(url).then(response => response.json()).then(data => console.log(data));

// load api data and save each symbol data into a list of objects
const loadCoins = async () => {
    const response = await fetch(url);
    let data = await response.json();
    data = data.crypto;
    // console.log(data);

    // push each coin json objects into the list
    const keys = Object.keys(data);
    keys.map((key) => _data.push(data[key]));

    console.log(_data);
}


const renderCoins = (filterTerm) => {
    let source = _data;

    if (filterTerm) {
        const term = filterTerm.toLowerCase();
        source = source.filter(({ symbol }) => {
            return symbol.toLowerCase().includes(term);
        });
    }

    const html = source.reduce((acc, { symbol, name, icon_url, max_supply }) => {

        return (
            acc + `
            <li class="crypto-card">
            <img src="${icon_url}" width="200" height="200" alt="${name}"/>
            <div>
                <h3>${symbol} (${name})</h3>
                <h3>Max Supply: ${max_supply}</h3>
            </div>
            </li>`
        );

    }, ``);

    const list = document.getElementById(`coins`);
    list.innerHTML = html;
    console.log(`data rendered`);
};



const main = async () => {
    await loadCoins();
    console.log(`data loaded`);
    renderCoins();
}

main();



const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    // const term = event.target.name.value;
    const term = document.querySelector("#input-coin").value
    // console.log(term);
    renderCoins(term);
}

const onReset = () => {
    renderCoins();
}
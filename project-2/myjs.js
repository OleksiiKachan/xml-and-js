const accessKey = `160f6bb220d8b6a02a89ee98a65c8f14`;

let _data = [];
let _data2 = [];

const url = (endpoint) => {
    return "http://api.coinlayer.com/api/" + endpoint + "?access_key=" + accessKey;
}

const getLiveRates = async () => {
    const endpoint = "live";
    const result = await fetch(url(endpoint),
    {
        method: "GET"
    })
    
    const data = await result.json();
    return data.rates;
}

const getCryptoList = async () => {
    const endpoint = "list";
    const result = await fetch(url(endpoint),
    {
        method: "GET"
    })
    
    const data = await result.json();
    return data.crypto;
}

const getHistoricalData = async(date, symbol) => {
    const endpoint = date;
    const result = await fetch(url(endpoint),
    {
        method: "GET"
    })

    const data = await result.json();

    const match = (element) => element == symbol;
    const index = Object.keys(data.rates).findIndex(match);

    return Object.values(data.rates)[index]
}

const loadLiveRates = async() => {
    const liveRates = await getLiveRates();
    _data = liveRates;
}

const renderLiveRate = (filterItem) =>{
    let source = _data

    const liveList = document.getElementById(`liveRates`);

    if (filterItem){
        const match = (element) => element == filterItem;
        const index = Object.keys(source).findIndex(match);
        const result = Object.values(source)[index]
        var html = "";
                html += `
                <h2>Live Rates</h2>
                <div id=rate>`;
                     
                    
                    const item = `<p>${filterItem}<br> $${result}</p>`;
                    html += item;
                        
                html += `</div>`;

                liveList.innerHTML = html;
    }else{
        var html = "";
                html += `
                <h2>Live Rates</h2>
                <div id=rate>`;
                     
                for (const [name, price] of Object.entries(source)){
                    
                    const item = `<p>${name}<br> $${price}</p>`;
                    html += item;
                }
                        
                html += `</div>`;

                liveList.innerHTML = html;
    }
}

const loadCyrptoList = async() => {
    const cryptolist = await getCryptoList();
    _data2 = cryptolist;
}

const renderCryptoLilst = (filterItem) =>{
    let source2 = _data2;
    const cryptolistList = document.getElementById(`cryptoList`);

    if(filterItem){
        const match = (element) => element == filterItem;
        const index = Object.keys(source2).findIndex(match);
        const result = Object.values(source2)[index];

        var html = "";
        html += `
                            <h2>List of Available Cryptocurrencies</h2>
                            <div id=list>
                            <table border=1>
                                <tr>
                                    <th>Icon</th>
                                    <th>Symbol</th>
                                    <th>Name</th>
                                    <th>Full Name</th>
                                    <th>Max Supply</th>
                                </tr>`;
                            
                                html += `<tr>
                                            <td><img width="100px" height="100px" src=${result.icon_url} alt=${result.name}></td>
                                            <td>${result.symbol}</td>
                                            <td>${result.name}</td>
                                            <td>${result.name_full}</td>
                                            <td>${result.max_supply}</td>
                                        </tr>`   
                            

                            html += `</table>
                            </div>`;
                            cryptolistList.innerHTML = html;
    }else{
        var html = "";
                            html += `
                            <h2>List of Available Cryptocurrencies</h2>
                            <div id=list>
                            <table border=1>
                                <tr>
                                    <th>Icon</th>
                                    <th>Symbol</th>
                                    <th>Name</th>
                                    <th>Full Name</th>
                                    <th>Max Supply</th>
                                </tr>`;
                            
                            
                            for (const [key, value] of Object.entries(source2)) {
                                // console.log(value);
                                html += `<tr>
                                            <td><img width="80px" height="80px" src=${value.icon_url} alt=${value.name}></td>
                                            <td>${value.symbol}</td>
                                            <td>${value.name}</td>
                                            <td>${value.name_full}</td>
                                            <td>${value.max_supply}</td>
                                        </tr>`   
                            }

                            html += `</table>
                            </div>`;
                            cryptolistList.innerHTML = html;
    }
}

var btnSubmit = document.getElementById("btnSubmit");
var txtDate = document.getElementById("txtDate");
var txtSymbol = document.getElementById("txtSymbol");
btnSubmit.addEventListener("click", async() => {
    const result = await getHistoricalData(txtDate.value, txtSymbol.value);
    alert("The price for " + txtSymbol.value + " in " + txtDate.value + " is " + result);
})


loadLiveRates().then(renderLiveRate);
const onSubmit = (event) => {
    event.preventDefault();

    const term = event.target.name.value;

    renderLiveRate(term)
};

const onReset = () => {
    renderLiveRate();
};


loadCyrptoList().then(renderCryptoLilst);
const onSubmit2 = (event) => {
    event.preventDefault();

    const term = event.target.name.value;

    renderCryptoLilst(term)
};

const onReset2 = () => {
    renderCryptoLilst();
};

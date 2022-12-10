const accessKey = `41f963fe4df153208e63830ba0a4f7b1`;

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
    //console.log(url(endpoint));
    const result = await fetch(url(endpoint),
    {
        method: "GET"
    })

    const data = await result.json();
    //console.log(Object.keys(data.rates));

    const match = (element) => element == symbol;
    const index = Object.keys(data.rates).findIndex(match);

    return Object.values(data.rates)[index]
}

const loadCyrptoList = async() => {
    const cryptolist = await getCryptoList();
    const cryptolistList = document.getElementById(`cryptoList`);
    const cryptolistItem = Promise.resolve(cryptolist)
                        .then(cryptolist => {
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
                            
                            
                            for (const [key, value] of Object.entries(cryptolist)) {
                                // console.log(value);
                                html += `<tr>
                                            <td><img width="100px" height="100px" src=${value.icon_url} alt=${value.name}></td>
                                            <td>${value.symbol}</td>
                                            <td>${value.name}</td>
                                            <td>${value.name_full}</td>
                                            <td>${value.max_supply}</td>
                                        </tr>`   
                            }

                            html += `</table>
                            </div>`;
                            cryptolistList.innerHTML = html;
                        })
}

const loadLiveRates = async() => {
    const liveRates = await getLiveRates();
    const liveList = document.getElementById(`liveRates`);
    const liveListItem = 
        Promise.resolve(liveRates)
            .then(rates => {
                var html = "";
                html += `
                <h2>Live Rates</h2>
                <div id=rate>`;
                     
                for (const [name, price] of Object.entries(rates)){
                    
                    const item = `<p>${name}<br> $${price}</p>`;
                    html += item;
                }
                        
                html += `</div>`;

                liveList.innerHTML = html;
            });
}


var btnSubmit = document.getElementById("btnSubmit");
var txtDate = document.getElementById("txtDate");
var txtSymbol = document.getElementById("txtSymbol");

btnSubmit.addEventListener("click", async() => {
    const result = await getHistoricalData(txtDate.value, txtSymbol.value);
    alert("The price for " + txtSymbol.value + " in " + txtDate.value + " is " + result);
})


loadLiveRates();
loadCyrptoList();
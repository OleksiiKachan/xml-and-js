const access_key = `3dd7bed8c7fbeaa1e7e267dd3e8ad623`;
let _data = [];

const renderHTML = (nameTerm) => {
    const htmlBody = document.getElementById("main");

    let source = _data;
    
    if (nameTerm) {
        htmlBody.innerHTML = "";
        for (const key in source) {
            if (source[key].symbol.toLowerCase().includes(nameTerm)) {
                let html = `
                    <div class="card">
                        <img class="icon" src="${source[key].icon_url}"/>
                        <div class="symbol">${source[key].symbol}</div>
                        <div class="name">${source[key].name_full}</div>
                        <div class="max_supply"> Max supply: 
                            <span class="number-max-supply">${source[key].max_supply}</span>
                        </div>
                    </div>
                `;
                htmlBody.insertAdjacentHTML("beforeend", html);
            }
        }

    }else{
        htmlBody.innerHTML = "";
        for (const key in source) {
            let html = `
                <div class="card">
                    <img class="icon" src="${source[key].icon_url}"/>
                    <div class="symbol">${source[key].symbol}</div>
                    <div class="name">${source[key].name_full}</div>
                    <div class="max_supply"> Max supply: 
                        <span class="number-max-supply">${source[key].max_supply}</span>
                    </div>
                </div>
            `;
            htmlBody.insertAdjacentHTML("beforeend", html);
        }
    }

    console.log(`data rendered`);
};

fetch(`http://api.coinlayer.com/list?access_key=${access_key}`)
    .then((data) => data.json())
    .then((data) => {
        console.log(`data loaded`);
        _data = data.crypto;
        renderHTML();
    });

const onSubmit = (event) => {
    event.preventDefault();

    const term = event.target.name.value;

    renderHTML(term)
};

const onReset = () => {
    renderHTML();
};



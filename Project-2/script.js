const dropList = document.querySelectorAll("form select"),
from = document.querySelector(".from select"),
to = document.querySelector(".to select"),
btn = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "CAD" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

btn.addEventListener("click", e =>{
    e.preventDefault(); 
    getExchangeRate();
});



function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
	let url = `http://api.exchangeratesapi.io/v1/latest?access_key=bafe017d1e1aa3240f2530f9dc3d9616
    &from=${from.value}
    &to=${to.value}&amount=${amount.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        
        let exchangeRate = result[to.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2); 
        exchangeRateTxt.innerText = `${amountVal} ${from.value} = ${result.value} ${to.value}`;
    })
};
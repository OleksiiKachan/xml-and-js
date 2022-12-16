const getClinic = (searchQuery) => {
  fetch(
    `https://api.fda.gov/drug/label.json?search=effective_time:[20110601+TO+20151231]&limit=1`
  )
    .then((res) => res.json())
    .then((data) => {
   
      const list = document.getElementById("clinic");
      list.innerHTML = "";
      data.results.map((item) => {
        console.log(item);
        const html = `
                <div class="card">
                <h1>Drug</h1>
                <h2>Id: ${item.id}</h2>
            <h3>Effective time:${item.effective_time}</h3>
            <h3>Details:</h3>
            <br>
             <h4>Purpose</h4>
            <p>${item.purpose}</p>
            <h4>References</h4>
            <p>${item.references}</p>
            <h4>Product elements</h4>
            <p>${item.spl_product_data_elements}</p>
            <h4>Dosage and administratons</h4>
            <p>${item.dosage_and_administration}</p>
               <h4>Stop_use</h4>
            <p>${item.stop_use}</p>
            <h4>Warnings</h4>
            <p>${item.warnings}</p>
            <h4>Indication and usage</h4>
            <p>${item.indications_and_usage}</p>
            <h4>Active Ingredients</h4>
            <p>${item.active_ingredient}</p>
            <h4>Inactive Ingredients</h4>
            <p>${item.inactive_ingredient}</p>            
            <h4>Other safety information</h4>
            <p>${item.other_safety_information}</p>
            <h4>${item.active_ingredient}</h4>
            </div>
            `;

        list.insertAdjacentHTML("beforeend", html);
      });
    });
};
getClinic("title");



const getFood = (searchQuery) => {
  fetch(
    `https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=1`
  )
    .then((res) => res.json())
    .then((data) => {
   
      const list = document.getElementById("food");
      list.innerHTML = "";
      data.results.map((item) => {
        console.log(item);
        const html = `
                <div class="card">
                <h1>Food</h1>
                <h2>country: ${item.country}</h2>
            <h3>city:${item.city}</h3>
            
             <h4>address_1</h4>
            <p>${item.address_1}</p>
            <h4>reason_for_recall</h4>
            <p>${item.reason_for_recall}</p>
           
            </div>
            `;

        list.insertAdjacentHTML("beforeend", html);
      });
    });
};
 getFood();

const getResults = (searchQuery) => {
  fetch(
    `https://api.fda.gov/drug/label.json?search=effective_time:[20110601+TO+20121231]&limit=1`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results)
      const list = document.getElementById("results");
      list.innerHTML = "";
      data.results.map((item) => {
        console.log(item);
        const html = `
                <div class="card">
                <h2 class="id">Drug ID: ${item.id}</h2>
            <h3>Effective time:${item.effective_time}</h3>
            <h3>Drug details:</h3>            
            <h4>Active Ingredients</h4>
            <p>${item.active_ingredient}</p>
            <h4>Inactive Ingredients</h4>
            <p>${item.inactive_ingredient}</p>
            <h4>Dosage and administratons</h4>
            <p>${item.dosage_and_administration}</p>
            <h4>Indication and usage</h4>
            <p>${item.indications_and_usage}</p>
            <h4>Other safety information</h4>
            <p>${item.other_safety_information}</p>
            <h4>Purpose</h4>
            <p>${item.purpose}</p>
            <h4>References</h4>
            <p>${item.references}</p>
            <h4>Product elements</h4>
            <p>${item.spl_product_data_elements}</p>
            <h4>Stop_use</h4>
            <p>${item.stop_use}</p>
            <h4>Warnings</h4>
            <p>${item.warnings}</p>
            </div>
            `;

        list.insertAdjacentHTML("beforeend", html);
      });
    });
};
getResults("title");

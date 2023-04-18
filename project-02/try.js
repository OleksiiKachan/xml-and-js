const apiKey = `TrxPhnRdoXbShoodfQeg1ExhbhTWyKyF`;

const getBreed = async() => {
    const result = await fetch(`http://api.thedogapi.com/v1/breeds`);
    const data = await result.json();
    return data;
}
getBreed().then((data) => console.log(data));

const loadBreed = async() => {
    const breed = await getBreed();
    const list = document.getElementById(`breeds`);
    breed.map((data) => {

        //Defining mapped parameters first
        const breedID = data.id;
        const breedName = data.name;
        let breedOrigin;
        if (data.origin == null || data.origin == undefined || data.origin === ""){
            breedOrigin = `Not known`
        }
        else {
            breedOrigin = data.origin;
        }
        const breedWeight = data.weight.metric;
        const breedHeight = data.height.metric;
        const breedLifeSpan = data.life_span;

        const html = `
        <li><article><img = src="${data.image.url}" width="350" height="280" alt="${breedName} Image">
            <div id="breedDiv">
                <h3>${breedID}. ${breedName}</h3>
                <p><b>Life Span: </b>${breedLifeSpan}</p>
                <p><b>Origin: </b>${breedOrigin}</p>
                <p><b>Breed Weight: </b>${breedWeight} Kilograms</p>
                <p><b>Breed Height: </b>${breedHeight} Centimeters</p>
            </div>
        </article></li>
        `;

        list.insertAdjacentHTML("beforeend", html);
    })
}

loadBreed();
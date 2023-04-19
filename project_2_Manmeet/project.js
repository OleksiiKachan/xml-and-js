let _data = [];
let _data1 = [];
const getDefinitions = async (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'daa3cc9f26mshe489734f7b0a8f4p114ef1jsnc18eaa9e7ade',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    }
    const result = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, options);
    const arr = await result.json();
    return arr.definitions;
};

const getRhymes = async (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'daa3cc9f26mshe489734f7b0a8f4p114ef1jsnc18eaa9e7ade',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    }
    const result = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`, options);
    const arr = await result.json();
    return arr.rhymes;
};

const loadDefinitions = async (word) => {

    const definitions = await getDefinitions(word);
    console.log(definitions)
    _data = definitions && await Promise.all(
        definitions && definitions.map(async (wordDef) => {
            return { ...wordDef};
        })
    );

    const rhymes = await getRhymes(word);
    console.log(rhymes);
    _data1 = rhymes.all;
    return _data1;
};
const renderDefinitions = async (word) => {
    const list = document.getElementById(`def`);
    const rhymsDiv = document.getElementById(`rhyms`);
    list.innerHTML = "";
    rhymsDiv.innerHTML = "";
    
    const definitions = getDefinitions(word);
    let source = _data;
    if (word) {
        //source = source && source.filter(( name ) => name.toLowerCase().includes(word));
    }

    const html = _data.reduce((acc, { definition, partOfSpeech}) => {
        //rhymesList.map(() => )
        return (acc +
            `
        <ul>
            <li>${definition}${partOfSpeech}</li>
        </ul>
    `);
    }, ``);

    const rhymesList = _data1 && _data1.map((rhymes) => {
        //rhymesList.map(() => )
        console.log(rhymes)
        return    `
        ${rhymes}
    `})
    list.insertAdjacentHTML("beforeend", html);
    rhymesList && rhymesList.length && rhymsDiv.insertAdjacentHTML("beforeend", rhymesList);
};

const onSubmit = async (event) => {
    event.preventDefault();
    document.getElementById(`def`).innerHTML = "";

    const word = event.target.term.value;
    await loadDefinitions(word);
    renderDefinitions(word)
};
const onReset = () => {
    getDefinitions();
};

/*
*********Failed Code******
const defi = definitions.map(items => {
        const container = [];

        container[items.definition];

        return container;
    });
    console.log(defi);
********************


*/
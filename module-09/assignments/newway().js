const main = async() => {
    const data = await fetch ("people.xml");
    const stringData = await data.text();

    const parser = new DOMParser();
    const parsed = parser.parseFromString(dtaa, 'xml/xml');
    displayData(parsed);
};
main();
const officers = [
{id:20, name: "Captain Piett"},
{id: 24, name: "General Veers"},
{id: 56, name: "Admiral Ozzel"},
{id:88, name:"Commander Jerjerrod"}
];
console.log('Source: ');
console.log(officers);

//const ids = officers.map((item) => {
    //return item.id;
//});

const ids = officers.map(({name,id}) => {
const [firstName, lastName] = name.split(' ');

    return{
            id,
            firstName,
            lastName
    };
});

console.log(ids);
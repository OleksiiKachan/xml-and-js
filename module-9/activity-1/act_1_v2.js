const loadData= async () =>{
try{

const response = await fetch('customers.xml');
const str = await response.text();
const data = new DOMParser().parseFromString(str,'text/xml');
displayData(data);}
catch(error){
    console.error(error);
}
};

loadData();

fetch("customers.xml").then((response)=> response.text()).then((str)=>
new DOMParser().parseFromString(str,"text/xml")).then(displayData);

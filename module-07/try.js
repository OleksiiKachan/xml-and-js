const data=[
    {id:30, name: "Sharon", dept: "ITS",score: 20},
    {id:45,name:"Gaurav", dept: "SE",score: 40},
    {id:50,name:"Vanada",dept: "ITS",score: 30},
];

console.log(`-----MAP-----`)
const data1=data.map((data)=>{ 
    return data.name;});
console.log(data1);

console.log(`----FILTER-----`)
const d =data.filter((a)=> a.dept ==="ITS");
console.log(d);

console.log(`----REDUCE----`)
const r=data.reduce((accum,a)=>{return accum+a.score;},0);
console.log(r);

console.log(`---JOIN-----`)
const j =data.map(({dept})=> dept).join(" , ");
console.log(j);

console.log(`---Reduce2---`)
const {a,b}=data.reduce((accum,c)=>{
    if(c.dept==="ITS"){
        accum.a.push(c);
    }else if(c.dept==="SE"){
        accum.b.push(c);
    }
    return accum;
},
{
    a: [], b: []
});

console.log(a);
console.log(b);

console.log(`---Chaining---`)



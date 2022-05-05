let text = document.getElementById('input');
let btn = document.getElementById('button');
let result = document.getElementById('output')


function display(){
    result.innerHTML = text.value;
}

btn.addEventListener('click',display);
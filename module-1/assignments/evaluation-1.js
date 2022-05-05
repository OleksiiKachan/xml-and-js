function display() {
    document.getElementById('name').innerHTML = 'Kaiyan Chen';
    return false;
}

document.getElementById('showname').addEventListener('click', display);
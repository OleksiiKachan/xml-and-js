function sayMyName() {
    let firstName = "RAVJIT";
    let lastName = "SINGH";
    let fullName = firstName +" " + lastName;
    document.getElementById('name').innerHTML = `${fullName}`;
}

function sendFeedback() {
    let mailId = document.getElementById("e_mail").value;
    let _date = document.getElementById("_date").value;
    let comments = document.getElementById("comment").value;
    document.getElementById('ent_mail').innerHTML = `${mailId}`;
    document.getElementById('ent_date').innerHTML = `${_date}`;
    document.getElementById('ent_comment').innerHTML = `${comments}`;
}
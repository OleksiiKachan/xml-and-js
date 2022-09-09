const $ = selector => document.querySelector(selector); 

function disp() {
    let email = $('#email').value;
    let date = $('#date').value;
    let comment = $('#comment').value;

    alert(email + '. Last visit: ' + date + '. Feedback: ' + comment);
}
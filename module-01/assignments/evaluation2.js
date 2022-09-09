function display() {
  let mail = document.getElementById("mail").value;
  let dt = document.getElementById("date").value;
  let cmt = document.getElementById("comment").value;
  alert(
    "Your mail is " +
      mail +
      " and entered date is " +
      dt +
      " and your entered comment is " +
      cmt
  );
}

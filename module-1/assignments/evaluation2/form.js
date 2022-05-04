submitFeedback = () => {
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const comments = document.getElementById("comments").value;

  document.getElementById("emailDisplay").innerHTML = email;
  document.getElementById("dateDisplay").innerHTML = date;
  document.getElementById("commentsDisplay").innerHTML = comments;
};

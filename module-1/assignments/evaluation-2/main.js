displayFeedback = (e) => {
  e.preventDefault();
  let email = document.getElementById("emailTxt").value;
  let visitDate = document.getElementById("visitDate").value || "N/A";
  let comments = document.getElementById("comments").value || "N/A";
  if (email) {
    document.getElementById("feedBackForm").reset();
    document.getElementById("feedBackDisplay").innerHTML =
      "<p>Email: " +
      email +
      "</p><p>Date Of Visit: " +
      visitDate +
      "</p><p>Comments: " +
      comments +
      "</p>";
  }
};

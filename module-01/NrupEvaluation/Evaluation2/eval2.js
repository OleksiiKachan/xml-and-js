function User_info()
{
    var usremail = document.getElementById("email").value;
    var usrdate = document.getElementById("date").value;
    var usrcomment = document.getElementById("comment").value;

    document.getElementById("heading").innerHTML = "User Info";
    document.getElementById("useremail").innerHTML = usremail;
    document.getElementById("userdate").innerHTML = usrdate;
    document.getElementById("usercomment").innerHTML = usrcomment;
}
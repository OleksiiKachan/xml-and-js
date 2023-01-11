# Evaluation 2

![image info](../assets/2.png)

1. Design the following webform, and add some CSS style (like color)

2. Using JavaScript, develop a program which collect form data and display them, when user clicks on “send your feedback” button

<html>
<head>
    <script src ="js/validation.js">
        display();
        function display(){
            var email=document.getElementById("email")
            var date=document.getElementById("date")
            var comments=document.getElementById("comments")
            document.write
        }
    <style>
        form{
            background-color:
        }
    </style>
</head>
<body>
    <form methof="get" action="evaluation-2.md">
        Your Email*:<input type="text" id="email">
        Date of Visit: <input type="text" id="date" placeholder="mm/dd/yyy">
        <tr>
        <td>Your Comments:</td>
        <td><textarea name="comments" id="comments" cols="100" rows="10"></textarea></td>
        </tr>
        <input type="button" id="feedback" value="Send your feedback" onClick="display()">


</body>
</html>
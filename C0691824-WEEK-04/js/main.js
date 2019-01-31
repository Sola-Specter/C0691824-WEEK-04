// Your code here!

var date = new Date();

date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

document.body.innerHTML = "<h1> The date is " + date + "</h1>"; 

function myFunction() {
    alert("My function has been called");
}
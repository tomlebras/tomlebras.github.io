var password = "bibou";
var x; 
x = prompt("Enter in the password ");
if (x === null) {
    window.location = "wrongpassword.html"
} else if (x === password) {
 alert("Come right in!");
 window.location = "liste.html";
}
else {
 window.location = "wrongpassword.html";
}
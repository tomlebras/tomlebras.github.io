
// Password protection

var password = "bibou";
var x; 
x = prompt("Enter in the password ");
if (x === null) {
    window.location = "wrongpassword.html"
} else if (x === password) {
 window.location = "covid_truepwd.html";
}
else {
 window.location = "wrongpassword.html";
}
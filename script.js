var password = "bibou";
var x = prompt("Enter in the password "," ");
if (x.toLowerCase() == password) {
 alert("Come right in \n \n You've entered in the right password");
 window.location = "liste.html";
}
else {
 window.location = "wrongpassword.html";
}
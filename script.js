
// Collapsible button

var coll;
var i;
var collid;


// suivre les étapes décrites ici : https://www.w3schools.com/howto/howto_js_collapsible.asp 
// ne fonctionne pas ; j'ai dû wrapper le tout dans un addEventListener("load") pour que tout cela ne se déclenche qu'une fois la page chargée
window.addEventListener("load", function(event) {
  coll = document.getElementsByClassName("collapsible");

  // console.log(coll);
  // console.log(coll.length);
  // console.log(coll[0], coll[1], coll);
  // console.log(collid);


  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      // if (content.style.display === "block") {
      //   content.style.display = "none";
      // } else {
      //   content.style.display = "block";
      // }
    });
  }

})



// firebaseConfig and db must be declared globally so that they can be used both in the load eventlistener and in the onclick function
var firebaseConfig = {
  apiKey: "AIzaSyDJQ_eBQ0cNKskX7UJSe8OZSByP9sH-fJ8",
  authDomain: "tomlebras-61529.firebaseapp.com",
  databaseURL: "https://tomlebras-61529-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tomlebras-61529",
  storageBucket: "tomlebras-61529.appspot.com",
  messagingSenderId: "85950281578",
  appId: "1:85950281578:web:1e13517ef9a84311da5713",
  measurementId: "G-65VD1FNK2W"
};
var db;
var docRef;
var currentCount;

// suivre les étapes décrites ici : https://www.w3schools.com/howto/howto_js_collapsible.asp 
// ne fonctionne pas ; j'ai dû wrapper le tout dans un addEventListener("load") pour que tout cela ne se déclenche qu'une fois la page chargée
window.addEventListener("load", function(event) {

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  db = firebase.firestore(); 

  // this creates a document, but we only needed to do this once!
  // db.collection("manual-count").doc("clickCount").set({
  //   count: 0
  // })

});


function displayCounter() { //this is probably not the most efficient, as it calls the db to get the value even if it already knows it 
  
  console.log("ondisplay");
  
  docRef = db
  .collection("manual-count")
  .doc("clickCount");

docRef.get(
).then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    currentCount = doc.data().count;
    console.log("currentCount before increment:", currentCount);
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
}).then(
  function(updateButton) {
    document.getElementById("counterButton").innerHTML = currentCount + " clicks on this button so far.";
  }
);

}



function incrementCounter() {

console.log("click");

if (currentCount) {
  document.getElementById("counterButton").innerHTML = (currentCount + 1) + " clicks on this button so far."; 
}

  docRef = db
    .collection("manual-count")
    .doc("clickCount");

  docRef.get(
  ).then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      currentCount = doc.data().count;
      console.log("currentCount before increment:", currentCount);
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  }).then(
    function(updateCount) {
      db.collection("manual-count").doc("clickCount").update({
        count: currentCount + 1
      });
      console.log("incrementation done");
    }
  ).then(
    function(getDisplayAgainCount){
      docRef.get(
        ).then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            currentCount = doc.data().count;
            console.log("currentCount after increment:", currentCount);
          } else {
            console.log("No such document!");
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });  
    }
  ).then(
    function(updateButton) {
      document.getElementById("counterButton").innerHTML = (currentCount + 1) + " clicks on this button so far.";    }
  );

}
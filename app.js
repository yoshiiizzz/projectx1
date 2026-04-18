var firebaseConfig = {
  apiKey: "AIzaSyCIJXQ7NSAPnLxRh34_zhcd5-q5buP_fKQ",
  databaseURL: "https://projectx1-72726-default-rtdb.asia-southeast1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

db.ref("sensor/rain").on("value", function(snapshot) {
  var val = snapshot.val();

  if (val == 0) {
    document.getElementById("status").innerHTML = "HUJAN";
  } else {
    document.getElementById("status").innerHTML = "TIDAK HUJAN";
  }
});

function tutup() {
  db.ref("control/servo").set(1);
}

function buka() {
  db.ref("control/servo").set(0);
}

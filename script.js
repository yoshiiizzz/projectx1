// 🔥 KONFIGURASI FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyCIJXQ7NSAPnLxRh34_zhcd5-q5buP_fKQ",
  databaseURL: "https://projectx1-72726-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Inisialisasi
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// ============================
// 📡 MONITORING HUJAN
// ============================
db.ref("sensor/rain").on("value", function(snapshot) {
  var val = snapshot.val();

  if (val == 0) {
    document.getElementById("status").innerHTML = "🌧️ HUJAN";
    document.body.style.background = "#cce7ff";
  } else {
    document.getElementById("status").innerHTML = "☀️ TIDAK HUJAN";
    document.body.style.background = "#eef2f3";
  }
});

// ============================
// 🎛️ KONTROL SERVO
// ============================
function tutup() {
  console.log("Tutup diklik");

  // 🔥 WAJIB: pastikan manual dulu
  db.ref("control/mode").set("manual");
  db.ref("control/servo").set(1);
}

function buka() {
  console.log("Buka diklik");

  // 🔥 WAJIB: pastikan manual dulu
  db.ref("control/mode").set("manual");
  db.ref("control/servo").set(0);
}

// ============================
// 🔁 MODE
// ============================
function setAuto() {
  console.log("Mode AUTO");
  db.ref("control/mode").set("auto");
}

function setManual() {
  console.log("Mode MANUAL");
  db.ref("control/mode").set("manual");
}

// ============================
// 🔔 DEBUG BUZZER (OPSIONAL)
// ============================
db.ref("control/buzzer").on("value", function(snapshot) {
  console.log("Buzzer:", snapshot.val());
});

// 🔥 KONFIGURASI FIREBASE (GANTI SESUAI PUNYA KAMU)
var firebaseConfig = {
  apiKey: "AIzaSyCIJXQ7NSAPnLxRh34_zhcd5-q5buP_fKQ",
  databaseURL: "https://projectx1-72726-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// ============================
// 📡 MONITORING STATUS HUJAN
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
  db.ref("control/servo").set(1);
}

function buka() {
  db.ref("control/servo").set(0);
}

// ============================
// 🔁 MODE AUTO / MANUAL
// ============================
function setAuto() {
  db.ref("control/mode").set("auto");
}

function setManual() {
  db.ref("control/mode").set("manual");
}

// ============================
// 🔔 (OPSIONAL) STATUS BUZZER
// ============================
db.ref("control/buzzer").on("value", function(snapshot) {
  var val = snapshot.val();

  console.log("Buzzer:", val);
  // kalau mau ditampilkan di HTML, tinggal tambah element
});

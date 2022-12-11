/*
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC-CuzCY_raTal8YhWWmzhFqrsK4fZNVP8",
    authDomain: "blood-pressure-26f6d.firebaseapp.com",
    databaseURL: "https://blood-pressure-26f6d-default-rtdb.firebaseio.com",
    projectId: "blood-pressure-26f6d",
    storageBucket: "blood-pressure-26f6d.appspot.com",
    messagingSenderId: "74300529167",
    appId: "1:74300529167:web:40aaae7572083e5641e17a",
    measurementId: "G-RF3MVJ6Y74"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
*/
  /*///////////////////////////////////////////////////////////////////////////*/


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC-CuzCY_raTal8YhWWmzhFqrsK4fZNVP8",
    authDomain: "blood-pressure-26f6d.firebaseapp.com",
    databaseURL: "https://blood-pressure-26f6d-default-rtdb.firebaseio.com",
    projectId: "blood-pressure-26f6d",
    storageBucket: "blood-pressure-26f6d.appspot.com",
    messagingSenderId: "74300529167",
    appId: "1:74300529167:web:40aaae7572083e5641e17a",
    measurementId: "G-RF3MVJ6Y74"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = firebase.database();

var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");




/* GET SYS from FireBase */
database.ref("/SYS").on("value",function(snapshot)
{
    var SYS = snapshot.val();
    document.getElementById("SYS").innerHTML = SYS;
});

/* GET DIA from FireBase */
database.ref("/DIA").on("value",function(snapshot)
{
    var DIA = snapshot.val();
    document.getElementById("DIA").innerHTML = DIA;
});

/* GET PPM from FireBase */
database.ref("/PPM").on("value",function(snapshot)
{
    var PPM = snapshot.val();
    document.getElementById("PPM").innerHTML = PPM;
});

/* Get Button */
btnStart.onclick = function()
{
    firebase.database().ref("/BTN").update({
        "Btn" : 1
    });
    alert("Bắt đầu đo");
}

btnStop.onclick = function()
{
    firebase.database().ref("/BTN").update({
        "Btn" : 0
    });
    alert("Đã dừng đo");
}


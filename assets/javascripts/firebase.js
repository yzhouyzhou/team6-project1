var firebaseConfig = {
  apiKey: "AIzaSyDINmkeruVJ8Hy7c9uQJCwOLboMY-rspTQ",
  authDomain: "project-1-908ef.firebaseapp.com",
  databaseURL: "https://project-1-908ef.firebaseio.com",
  projectId: "project-1-908ef",
  storageBucket: "project-1-908ef.appspot.com",
  messagingSenderId: "691990148527",
  appId: "1:691990148527:web:da221da1b1f467b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref('users').once('value').then(function (snapshot) {
  var users = snapshot.val().users
  // irrate the user each time we load the page
  users++

  database.ref("users").set({
    users: users

  })
});

console.log("user added");
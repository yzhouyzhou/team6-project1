var firebaseConfig = {
    apiKey: "AIzaSyARlvMHvGRm39z9wmY5zq0Ix2MVU8_liPU",
    authDomain: "coderbay-26249.firebaseapp.com",
    databaseURL: "https://coderbay-26249.firebaseio.com",
    projectId: "coderbay-26249",
    storageBucket: "",
    messagingSenderId: "83337563836",
    appId: "1:83337563836:web:4db5fc38ea7972d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database()

   // 2. Button for adding subscribers
  $("#submit-btn").on("click", function(event) {
    event.preventDefault();
  
     // Grabs user input
    var newsName = $("#name-input").val().trim();
    var newsEmail = $("#email-input").val().trim();
    var newsComments = $("#comments-input").val().trim();
    
    // Creates local "temporary" object for holding subscriber data
    var newSubscriber = {
      name: newsName,
      email: newsEmail,
      comments: newsComments,
    };
    
    // Uploads data to the database
    database.ref().push(newSubscriber);
    
    // Logs everything to console
    console.log(newSubscriber.name);
    console.log(newSubscriber.email);
    console.log(newSubscriber.comments);
     alert("Thank you for signing up!");
     
     // Clears all of the text-boxes
    $("#name-input").val("");
    $("#email-input").val("");
    $("#comments-input").val("");
  });
  
  // to view amount of clicks on our page
  database.ref('users').once('value').then(function(snapshot) {
    var users = snapshot.val().users
 // irrate the user each time we load the page
    users++
 
    database.ref("users").set({
        users:users
 
    })
  });
 
 
 console.log("user added")

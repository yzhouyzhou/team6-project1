// my web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJTJhgHSdqJZsNzvTaj6OJ1HowHQr-j54",
    authDomain: "users-84016.firebaseapp.com",
    databaseURL: "https://users-84016.firebaseio.com",
    projectId: "users-84016",
    storageBucket: "",
    messagingSenderId: "480585188577",
    appId: "1:480585188577:web:dab8c748480bf398"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  
  // Here we are building the URL we need to query the database
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=chicago&units=imperial&appid=" + APIKey;
  
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
  url: queryURL,
  method: "GET"
  })
  
  
   // We store all of the retrieved data inside of an object called "response"
   .then(function(response) {
       
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object
          console.log(response);
  
  
       // Transfer content to HTML
       $(".city").html("<h1>" + response.name + " Weather Details</h1>");
       $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
       $(".humidity").text("Humidity: " + response.main.humidity + "%");
       $(".temperature").text("Temperature (F) " + response.main.temp);
       $(".rain").text(response.weather[0].main);
  
            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
            console.log("rain"+response.weather[0].main);
          });


          // 2 java code

          // creating a queryURL and a proxy for our variable
var queryURL = "https://api.darksky.net/forecast/50e96906f2f88a696fc32c4b3f40607d/41.85003,%20-87.65005"
var proxy = 'https://cors-anywhere.herokuapp.com/'
// then we use the ajax function to retrive our data
$.ajax({
  url: proxy + queryURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'origin': 'x-requested-with'
  },
  dataType: "json",
  method: "GET"

  // We store all of the retrieved data inside of an object called "response"
}).then(function (response) {

  // Log the queryURL
  console.log(queryURL);

  // Log the resulting object
  console.log(response);

  // Transfer content to HTML
  $(".city").html("<h4>" + response.timezone + " Weather Details</h4>");
  $(".wind").text("Wind Speed: " + response.currently.windSpeed + " mph");
  $(".humidity").text("Humidity: " + response.currently.humidity + "%");
  $(".temperature").text("Temperature:(F) " + response.currently.temperature);
  $(".summary").text("summary: " + response.currently.summary);
  $(".precipProbality").text("precipProbality: " + response.currently.precipProbability);

})

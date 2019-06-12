// creating a queryURL and a proxy for our variable
var queryURL = "https://api.darksky.net/forecast/50e96906f2f88a696fc32c4b3f40607d/41.85003,-87.65005"
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

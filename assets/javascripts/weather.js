          // creating a queryURL and a proxy for our variable
var queryURL = "https://api.darksky.net/forecast/50e96906f2f88a696fc32c4b3f40607d/41.85003,%20-87.65005"
var proxy = 'https://cors-anywhere.herokuapp.com/'
var weather=$("<div>");
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

  $("#weather-displayed").html(
    `<div class="card"> 
      <h5 class="card-header city">  Chicago Weather &#x26C5 </h5>
      <div class="card-body">
        <p class="card-text">
          <p class="temperature"> Temperature: (F)${response.currently.temperature} &#x1f321</p>
          <p class="wind">Wind Speed:  ${response.currently.windSpeed} mph </p>
          <p class="humidity">Humidity: ${response.currently.humidity} % </p>
          <p class="summary"> Summary:  ${response.currently.summary}</p>
          <P class="precipProbality">Precipitation-Probality:  ${response.currently.precipProbability} </P>
        </p>
      </div>
    </div>`
  )
})

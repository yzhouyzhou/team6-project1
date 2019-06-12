$("#events-display").text("Things To Do!")
function eventsDisplay(){
    var keyword = "concert";
    var events = $(this).attr("data-name");

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.eventful.com/json/events/search?app_key=QXvwcxm7wz44KSFD&location=chicago&keywords=" + keyword + "&date=This+Week&"
    $.ajax({
        url: queryURL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: "json",
        method: "GET"
    }).then(function(response){
        console.log(response)
        $("#events-display").empty();
        for (var i=0; i < 10; i++) {
            var eventDiv= $("<div class='eventDiv'>");
            var imageURL = response.events.event[i].image.url;
            var image = $("<img>");
            image.attr("src", imageURL);
            eventDiv.append(image);

            var eventName = $("<div>");
            eventName.html("Event title: "+ response.events.event[i].title);
            $("#events-display").append(eventName); 
    
            var venueAddress = $("<div>");
                venueAddress.html("Address: "+ response.events.event[i].venue_address )
                $("#events-display").append(venueAddress);

                var dateAndTime = $("<div>");
                dateAndTime.html("Date and Time "+ response.events.event[i].start_time)

                $("#events-display").append(dateAndTime);

        }

        

    })
}
eventsDisplay();

// function show_alert()
// {
//   var app_key = document.getElementById("app_key");
//   var oArgs = {
//             app_key: app_key.value ,
//             id: "20218701",
//             page_size: 25 ,
//   };
//   EVDB.API.call("/events/get", oArgs, function(oData) {
//     console.log("your myObject is " + JSON.stringify(oData));
// });
// }

// function show_alert2()
// {
//    var app_key = document.getElementById("app_key");
//    var where   = document.getElementById("where");
//    var query   = document.getElementById("query");
//    var oArgs = {
//       app_key: app_key.value ,
//       q: query.value,
//       where: where.value,
//       "date": "2019061100-2019062000",
//       "include": "tags,categories",
//       page_size: 5,
//       sort_order: "popularity",
//    };
//    EVDB.API.call("/events/search", oArgs, function(oData) {
//       console.log("your myObject is " + JSON.stringify(oData));
//     });
// }
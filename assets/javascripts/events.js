
$(".card-title").on("click", function () {
    var keyword = $(this).attr("data-subject")
   

    function eventsDisplay() {

        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.eventful.com/json/events/search?app_key=QXvwcxm7wz44KSFD&location=chicago&keywords=" + keyword + "&date=This+Week&"
        $.ajax({
            url: queryURL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: "json",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $("#events-display").empty();
            console.log(response.events.event.length)

            for (var i = 0; i < response.events.event.length; i++) {

                var eventDiv = $("<div class='eventDiv'>");
                var imageURL = response.events.event[i].image.medium.url;
                var image = $("<img>");
                image.attr("src", imageURL);
                eventDiv.append(image);
                $("#events-display").append(eventDiv);
                var eventName = $("<div>");
                eventName.html("Event title: " + response.events.event[i].title);
                $("#events-display").append(eventName);

                var venueAddress = $("<div>");
                venueAddress.html("Address: " + response.events.event[i].venue_address);
                $("#events-display").append(venueAddress);

                var dateAndTime = $("<div>");
                dateAndTime.html("Date and Time " + response.events.event[i].start_time);

                $("#events-display").append(dateAndTime);

                var btn = $("<button>");
                btn.addClass("event-btn");
                var eventURL = response.events.event[i].url;
                console.log(eventURL);
                btn.attr("onClick", `parent.location="${eventURL}"`)
                btn.text("Information");
                $("#events-display").append(btn);
           

            }



        })
    }
    eventsDisplay();

})









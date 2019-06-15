
$(".eventButton").on("click", function () {
    // option #1
    var keyword = $(this).attr("data-subject")
    // option #2
    // var keyword = $(this).data("subject")

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
                eventName.html(response.events.event[i].title);
                eventDiv.append(eventName);

                $("#events-display").append(eventDiv);

                var venueAddress = $("<div>");
                venueAddress.html(response.events.event[i].venue_address);
                eventDiv.append(venueAddress);

                $("#events-display").append(eventDiv);

                var dateAndTime = $("<div>");
                dateAndTime.html(response.events.event[i].start_time);
                eventDiv.append(dateAndTime);


                $("#events-display").append(eventDiv);

                var btn = $("<button>");
                btn.addClass("event-btn");
                var eventURL = response.events.event[i].url;
                console.log(eventURL);
                btn.attr("onClick", `parent.location="${eventURL}"`)
                // btn.attr("href",eventURL)
                btn.text("See more");
                eventDiv.append(btn);

                $("#events-display").append(eventDiv);
                // btn.on("click", function (){
                //     // <a rel="stylesheet" href="./assets/css/style.css">
                //     // <a href = response.events.event[i].url
                //     var a = $("<a>");
                //     a.attr("href", response.events.event[i].url);
                //     console.log(response.events.event[i].url)
                //     window.open(response.events.event[i].url);
                // })

            }



        })
    }
    eventsDisplay();

})




// function sportsdisplay () {
//     keyword = sports;

// $(document).on("click","#sports", eventsDisplay);

// }




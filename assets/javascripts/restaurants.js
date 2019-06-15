// hides the table displaying restaurant choices
$("#restaurant-table").hide();

// pull information from the restaurant input boxes into a variable when 'search' button clicked
$("#restaurant-submit-btn").on("click", function (e) {
    // prevents page from refreshing upon button click    
    e.preventDefault();

    // unhides the table showing restaurant options
    $("#restaurant-table").show();

    var restaurantInput = $("#restaurantInput").val().trim();
    console.log("restaurantInput: ", restaurantInput)

    // adds the user search term to Yelp's API
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + restaurantInput + "&location=chicago"

    $.ajax({
        url: queryURL,
        headers: {
            Authorization: 'Bearer ' + '1fYwQH2BTczH9-pzic24J1fHsBbe3-xp4tVmoDT95Jld3NWZJhY8KI-2kaKeoRCM85EfStUrb_d9K5x5yM85uSCMxCw2yyBBNczZDf3sfT7V8NbyMHFGEfZltWIAXXYx'
        },
        dataType: "json",
        method: "GET"
    }).then(function (response) {
        console.log("response: ", response);
        console.log("response.businesses.length: ", response.businesses.length)

        // loop circulates through the generated yelp array and pulls name, address, price, and url into table for display for 10 restaurants

        for (var i = 0; i < 10; i++) {
            var imageDiv = $("<div class='imageDiv'>");
                var imageURL = response.businesses[i].image_url;
                var image = $("<img>");
                image.attr("src", imageURL);
                imageDiv.append(image);

            // // Create the new row
            var newRow = $("<tr>").append(
                
                $("<td>").html(imageDiv),

                $("<td>").text(response.businesses[i].name),
                $("<td>").html(response.businesses[i].location.address1 + "<br>" + response.businesses[i].location.city + ", " + response.businesses[i].location.state + " " + response.businesses[i].location.zip_code),
                $("<td>").text(response.businesses[i].price),
                $("<td>").html('<a href="' + response.businesses[i].url + '">' + "Link" + '</a>'),
            );

            // Append the new row to the table
            $("#restaurant-table > tbody").append(newRow)
        }

    });



});



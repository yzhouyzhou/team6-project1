var marker;
var latitude = 41.7697383;
var longitude = -88.1517823;
var btn = $("<button>");
btn.html("Location");
btn.attr("latitude-value", "41.8781");
btn.attr("longitude-value", "-87.6298");
var aMap = document.getElementById('map');
var m = $("#map");
$("#location-display").append(btn);

function initMap() {

    var map = new google.maps.Map(aMap, {
        zoom: 9,
        center: { lat: latitude, lng: longitude }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });


    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    btn.on("click", function () {
        var newLat = btn.attr("latitude-value");
        var newLng = btn.attr("longitude-value");
        console.log(newLat, newLng);
        var center = new google.maps.LatLng(newLat, newLng);
        map.panTo(center);
        // marker.DROP(center);
    })

}
var locations = [
    { lat: 41.7697383, lng: -88.1517823 },
    { lat: 41.8781, lng: -87.6298 },
    { lat: 41.5677383, lng: -88.1517823 },
    { lat: 41.7667383, lng: -88.4517823 }
]



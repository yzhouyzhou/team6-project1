var marker;
var latitude = 41.885440;
var longitude = -87.627260;
var aMap = document.getElementById('map');

function initMap() {

    var map = new google.maps.Map(aMap, {
        zoom: 14,
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
            label: labels[i % labels.length],
            title: tooltips[i]
        });
    });


    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}
var locations = [
    { lat: 41.878910, lng: -87.635490 },  // willis tower
    { lat: 41.879540, lng: -87.624040 }, // arts institute
    { lat: 41.885440, lng: -87.627260 },  // chicago theatre
    { lat: 41.888280, lng: -87.632500 },  // house of blue
    { lat: 41.884315, lng: -87.620542 },  // Jay Pritzker Pavilion Millennium Park
    { lat: 41.891710, lng: -87.609660 }, // navy pier
    { lat: 42.0449188, lng: -87.6808331 }, //600 Emerson Evanston  
]
var tooltips = ["Willis Tower", "Arts Institute", "Chicago Theatre", "House of Blue", "Millennium Park",
    "Navy Pier", "Emerson"];

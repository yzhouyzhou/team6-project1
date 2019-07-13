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
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
    { lat: 41.879540, lng: -87.624040 }, // art institute
    { lat: 41.885440, lng: -87.627260 },  // chicago theatre
    { lat: 41.888280, lng: -87.632500 },  // house of blues
    { lat: 41.883993, lng: -87.619706 },  // Jay Pritzker Pavilion Millennium Park
    { lat: 41.891710, lng: -87.609660 }, // navy pier
    { lat: 42.0449188, lng: -87.6808331 }, //600 Emerson Evanston  
    { lat: 41.8675726, lng: -87.614038 }, //Shedd Aquarium 
    { lat: 41.866382, lng: -87.606676 }, //Alder Planetarium
    { lat: 41.790573, lng: -87.583066 }, //Museum of Science and Industry
    { lat: 41.866261, lng: -87.616981 }, //Field Museum
    { lat: 41.9474536, lng: -87.65613410000003 }, //Wrigley Field
    { lat: 41.862265, lng: -87.616638 }, //Soldier Field
    { lat: 41.829921, lng: -87.633757 }, //Guaranteed Rate Field
    { lat: 41.880647, lng: -87.674153 }, //United Center
    // { lat: 41.894809,  lng: -87.624214}, //Magnificent Mile
    { lat: 41.897968, lng: -87.623559 }, // Water Tower
    // { lat: 41.89877,  lng: -87.622917}, //John Hancock Center
    { lat: 41.888225, lng: -87.621238 }, //The Riverwalk
    // { lat: 41.875794,  lng: -87.618948}, //Buckingham Fountain
    // { lat: 41.883754,  lng: -87.624952 }, //Chicago Cultural Center


]
var tooltips = ["Willis Tower", "Art Institute \nBuckingham Fountain", "Chicago Theatre \nChicago Cultural Center", "House of Blues", "Millennium Park ",
    "Navy Pier", "Emerson", "Shedd Aquarium", "Alder Planetarium", "Museum of Science and Industry", " Field Museum", "Wrigley Field",
    "Soldier Field", "Guaranteed Rate Field", "United Center", "Water Tower \nJohn Hancock Center \nMagnificent Mile", "The Riverwalk"];



// add a listener to the marker and add the url --> to each tooltip


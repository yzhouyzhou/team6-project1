
// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
var marker;
var latitude = 41.7697383;
var longitude = -88.1517823;
var btn = $("<button>");
btn.html("Location");
btn.attr("latitude-value", "41.8781");
btn.attr("longitude-value", "-87.6298");
$("#location-display").append(btn);

function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: latitude, lng: longitude }
    });
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: latitude, lng: longitude }
    });
    marker.addListener('click', toggleBounce);

    btn.on("click", function () {
        var newLat = btn.attr("latitude-value");
        var newLng = btn.attr("longitude-value");
        console.log(newLat, newLng);
        var center = new google.maps.LatLng(newLat, newLng);
        map.panTo(center);
        // marker.DROP(center);
        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: { lat: latitude, lng: longitude }
        });
    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

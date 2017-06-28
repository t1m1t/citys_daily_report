$(document).ready(function () {
    // $("#start_over").click(start_over);
    createMap();
    // navigatorFunction();
});

var map, infoWindow;

function createMap() {
    // Creates and centers map
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map-location'), {
        zoom: 4,
        center: location
    });

    // Places marker at location
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    // Maps Geocoder
    var geocoder = new google.maps.Geocoder();
    var addresses = ['Dallas', 'Chicago', 'Jonesboro','Las Vegas','Austin','Memphis', 'Los Angeles'];
    for (var x = 0; x < addresses.length; x++) {
        geocodeAddress(geocoder, addresses[x], map);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    }
}

function geocodeAddress(geocoder, address, resultsMap) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, "load", initMap);
// var x = {};
// var navigatorFunction = function() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             x.latitude = position.coords.latitude;
//             x.longitude = position.coords.longitude;
//             console.log(x);
//         });
//     } else {
//         console.error("navigator.geolocation does not exist.");
//         return false;
//     }
// };
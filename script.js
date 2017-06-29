$(document).ready(function () {
    // $("#start_over").click(start_over);
    initialize();
});
var geocoder;
var map;
function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(33.6846,-117.8265);
    var mapOptions = {
        zoom: 8,
        center: latlng
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
// var map;
// function createMap() {
//     // Creates and centers map
//     var location = {lat: -25.363, lng: 131.044};
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: location
//     });
//
// }
//
// google.maps.event.addDomListener(window, "load", initMap);

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
$(document).ready(function () {
    // $("#start_over").click(start_over);
    // createMap();
    // // navigatorFunction();
    $.ajax(displayWeather);
});


// function createMap() {
//     // Creates and centers map
//     var location = {lat: -25.363, lng: 131.044};
//     var map = new google.maps.Map(document.getElementById('map-location'), {
//         zoom: 4,
//         center: location
//     });
//
//     // Places marker at location
//     var marker = new google.maps.Marker({
//         position: location,
//         map: map
//     });
//
//     // Maps Geocoder
//     var geocoder = new google.maps.Geocoder();
//     var addresses = ['Dallas', 'Chicago', 'Jonesboro','Las Vegas','Austin','Memphis', 'Los Angeles'];
//     for (var x = 0; x < addresses.length; x++) {
//         geocodeAddress(geocoder, addresses[x], map);
//     }
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//             map.setCenter(initialLocation);
//         });
//     }
// }
//
// function geocodeAddress(geocoder, address, resultsMap) {
//     geocoder.geocode({'address': address}, function(results, status) {
//         if (status === 'OK') {
//             var marker = new google.maps.Marker({
//                 map: resultsMap,
//                 position: results[0].geometry.location
//             });
//         } else {
//             alert('Geocode was not successful for the following reason: ' + status);
//         }
//     });
// }
//
// google.maps.event.addDomListener(window, "load", initMap);
//
// // var x = {};
// // var navigatorFunction = function() {
// //     if(navigator.geolocation) {
// //         navigator.geolocation.getCurrentPosition(function(position) {
// //             x.latitude = position.coords.latitude;
// //             x.longitude = position.coords.longitude;
// //             console.log(x);
// //         });
// //     } else {
// //         console.error("navigator.geolocation does not exist.");
// //         return false;
// //     }
// // };

var long = 33.740000;
var lat = -117.730000;


var displayWeather ={
    url: 'http://api.wunderground.com/api/1348f5771c1ee038/conditions/forecast/q/'+long+','+lat+'.json ',
    success: receiveDataFromServer,
    error: errorFromServer,
    dataType: 'json',
    method: 'get'

};

function errorFromServer(){
    console.log('there was an error');
}

function receiveDataFromServer(data){
    console.log('function was called');
    console.log(data);
    console.log(data.current_observation.display_location.full);
    console.log(data.current_observation.icon_url);
    $('#weather_image').css('background-image','url('+data.current_observation.icon_url+')');
    $('#locationDiv').text(data.current_observation.display_location.full);
    $('#weather').text(data.current_observation.weather);
    $('#estimated').text(data.current_observation.temperature_string);
    $('#observation_time').text(data.current_observation.observation_time);

>>>>>>> 51ee14a36b481e8c319d396daa2bd688d9ab5840
}
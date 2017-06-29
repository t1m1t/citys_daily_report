$(document).ready(function () {
    // $("#start_over").click(start_over);
    initialize();
    $.ajax(displayWeather);
    $.ajax(chuckNorris);
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
}

var chuckNorris ={
    url: 'https://api.chucknorris.io/jokes/random',
    success: receiveChuckData,
    error: chuckError,
    dataType: 'json',
    crossDomain: true,
    method: 'get'

};

function chuckError(){
    console.log('there was an error');
}

function receiveChuckData(chuck){
    console.log('function was called');
    console.log(chuck);
    console.log(chuck.value);
    $('#displayDiv').text(chuck.value);

}

var displayGooglePlaces ={
    url: 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ40CRaA7d3IAROZpKYHW1eqc&key=AIzaSyBJBVHYo1-ACgQdeMcJsl3obfU49O7UAHI',
    success: receiveDataFromServer,
    error: errorFromServer,
    dataType: 'json',
    method: 'get'
};

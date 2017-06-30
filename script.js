var lat1 = 33.6846;
var lng = -117.8265;
var data = null;
$(document).ready(function () {
    // $("#start_over").click(start_over);
    initialize();
    $.ajax(chuckNorris);

    var displayWeather ={
        url: 'http://api.wunderground.com/api/1348f5771c1ee038/conditions/forecast/q/'+lat1+','+lng+'.json ',
        success: receiveDataFromServer,
        error: errorFromServer,
        dataType: 'json',
        method: 'get'
    };

    $.ajax(displayWeather);
    // $('#address').click(zoomToArea);
    $('.btn-danger').click(codeAddress);

    $("#address_button").click(function(){
        console.log("clicked");
        codeAddress();
    });
    $("#weather_button").click(function(){
        console.log("weather button clicked");

    });
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
    geocoder.geocode( {'address': address}, function(results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());
            lat1 = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();

            var displayWeather ={
                url: 'http://api.wunderground.com/api/1348f5771c1ee038/conditions/forecast/q/'+lat1+','+lng+'.json ',
                success: receiveDataFromServer,
                error: errorFromServer,
                dataType: 'json',
                method: 'get'
            };

            $.ajax(displayWeather);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function errorFromServer(){
    console.log('there was an error');
}

function receiveDataFromServer(data){
    console.log('display weather function was called');
    console.log(data);
    console.log(data.current_observation.display_location.full);
    console.log(data.current_observation.icon_url);
    $('#weather_image').css('background-image','url('+data.current_observation.icon_url+')');
    $('#locationDiv').text(data.current_observation.display_location.full);
    $('#city_location').text(data.current_observation.observation_location.city);
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


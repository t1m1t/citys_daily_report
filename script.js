$(document).ready(function () {
    var lat1 = 33.6846;
    var lng = -117.8265;
    var data = null;

    initialize();

    var displayWeather ={
        url: 'http://api.wunderground.com/api/1348f5771c1ee038/conditions/forecast/q/'+lat1+','+lng+'.json ',
        success: receiveDataFromServer,
        error: errorFromServer,
        dataType: 'json',
        method: 'get'
    };

    $.ajax(displayWeather);
    $('.btn-danger').click(codeAddress);
    $("#address_button").click(function(){
        codeAddress();
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

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
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
    $('#weather_image').css('background-image','url('+data.current_observation.icon_url+')');
    $('#locationDiv').text(data.current_observation.display_location.full);
    $('#city_location').text(data.current_observation.observation_location.city);
    $('#weather').text(data.current_observation.weather);
    $('#estimated').text(data.current_observation.temperature_string);
    $('#observation_time').text(data.current_observation.observation_time);
}

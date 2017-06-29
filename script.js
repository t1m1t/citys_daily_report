$(document).ready(function () {
    $()
    $.ajax(displayWeather);
    $.ajax(chuckNorris);
    $.ajax(displayGooglePlaces);
});


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


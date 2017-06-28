/**
 * Created by Adam on 6/28/17.
 */
$(document).ready(function () {
    // $("#start_over").click(start_over);
    createMap();
});

function createMap() {

    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map-location'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
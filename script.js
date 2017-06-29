$(document).ready(function () {
    // $("#start_over").click(start_over);
    createMap();
    // navigatorFunction();
});
function createMap() {
    // Creates and centers map
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map-location'), {
        zoom: 4,
        center: location
    });

    // Places marker at location
}
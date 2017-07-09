function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
    myMap();
});

$(document).on('turbolinks:load',function(){
    myMap();
});

function myMap(){
    var myLatLng = new google.maps.LatLng(43.147007, -77.546894);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(43.147007, -77.546894),
        zoom: 15
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position: myLatLng});

    marker.setMap(map);
  
 }

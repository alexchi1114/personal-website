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
    $("#new_feedback").validate({
        
        rules: {
            "feedback[name]": {
                required:true, 
                maxlength:50
            },
            "feedback[subject]": {
                required:true, 
                maxlength:50
            },
            "feedback[email]": {
                required: true,
                email:true
            },
            "feedback[body]": {
                required:true,
                maxlength:500
            }
        },
        messages: {
            "feedback[name]": {
                required: "Please put your name so I know who you are.",
                maxlength: "Keep your name under 50 characters please!"
            },
            "feedback[subject]": {
                required: "Please put the subject of your message.",
                maxlength: "Keep the subject under 50 characters please!"
            },
            "feedback[body]": {
                required: "Looks like you forgot to actually say something here...",
                maxlength: "Keep your message under 500 characters please! I don't have all day to read this!"
            },
            "feedback[email]": {
                required: "Please put an email address so I can get back to you.",
                email: "Your email address must be in the format of name@domain.com"
            }
        }
    });
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

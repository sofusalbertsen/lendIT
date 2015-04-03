//dummy because we do not have user data to place
var dummycoordinates=[{lat:55.6943541,lng:12.5486899},{lat:55.6995298,lng:12.5767136},{lat:55.6819198,lng:12.5555563},{lat:55.6786896,lng:12.5677443},{lat:55.6710063,lng:12.5703621},{lat:55.6764755,lng:12.509079},{lat:55.7034400,lng:12.5397635},{lat:55.6890567,lng:12.5321675}];
var markers=[];
$(document).ready(function () {
    $("#MainCat>li>a").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings('li.active').removeClass("active"); //Find all other in the list, and remove the acive class
        $(this).parent().addClass("active"); //and add it on this one.
        var index = $(this).parent().index();
        $(".subsection div ul.nav-pills").removeClass("active");
        $(".subsection div ul.nav-pills").eq(index).addClass("active");
    });
    $(".subsection div ul.nav-pills>li>a").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings('li.active').removeClass("active"); //Find all other in the list, and remove the acive class
        $(this).parent().addClass("active"); //and add it on this one.
        var placeholders = $(this).children('span').text();
        console.log(placeholders);
        $('.picture-list').children('img').remove();
        setAllMap(null);
        markers=[];
        for (var counter = 0; counter < placeholders; counter++) {
            //Display dummy images. Here we would need to get info from the server about images etc.
            $('.picture-list').append('<img src="img/175x175.gif" alt=""/>');
           //Where can i borrow this imaged thing from? Marker is set here
            addMarker(dummycoordinates[Math.floor((Math.random() * 6))],'hello World');
            
        }
    });

    var map;
    initialize();
//Google code to initialize the map.
    function initialize() {
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(55.7034475, 12.5397635) //copenhagen
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    // Add a marker to the map and push to the array.
function addMarker(location,text) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title:text
  });
  markers.push(marker);
}
// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
});
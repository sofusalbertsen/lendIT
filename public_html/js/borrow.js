$(document).ready(function() {
    $("#MainCat>li>a").click(function(e) {
        e.preventDefault();
        $(this).parent().siblings('li.active').removeClass("active"); //Find all other in the list, and remove the acive class
        $(this).parent().addClass("active"); //and add it on this one.
        var index = $(this).parent().index();
        $(".subsection div ul.nav-pills").removeClass("active");
        $(".subsection div ul.nav-pills").eq(index).addClass("active");
    });
    $(".subsection div ul.nav-pills>li>a").click(function(e) {
        e.preventDefault();
        $(this).parent().siblings('li.active').removeClass("active"); //Find all other in the list, and remove the acive class
        $(this).parent().addClass("active"); //and add it on this one.
    });

var map;
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(55.7034475,12.5397635)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
//Does not work yet

 var marker = new google.maps.Marker({
      position: new google.maps.LatLng(55.7034400,12.5397635),
      map: map,
      title: 'Hello World!'
  });

google.maps.event.addDomListener(window, 'load', initialize);
});


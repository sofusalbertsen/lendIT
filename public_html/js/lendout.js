/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
  $('#address').dawaautocomplete({
      adgangsadresserOnly: true,
        select: function(event, data) {
//      $('#adresse-choice').text(data.tekst);
    }
  });
});
function codeAddress() {
  var address = document.getElementById('address').value;
  console.log("The adress is: "+address);
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
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
$(document).ready(function (){
    $('#nametogpscord').click(function (e) {
        e.preventDefault();
 codeAddress();
    });
});

$(document).ready(function (){
    $("#btn-show-login").click(function (){
        $(".login-grp").show();
        $("#btn-login").show();
        $("#btn-show-login").hide();
//        $(this).parent().append("<div>heeee</div>");

    });
       
    $( "#btn-show-login" ).click(function( event ) {
event.preventDefault();
});
$(".login-grp").hide();
});
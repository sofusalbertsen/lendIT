
$(document).ready(function () {
    $("#btn-show-login").click(function (event) {
        event.preventDefault();
        $(".login-grp").show();
        $("#btn-login").show();
        $("#btn-show-login").hide();
    });
    $(".login-grp").hide();
    
    
    $(function () {
  $('[data-toggle="popover"]').popover();
});
});
$(document).ready(function() {
    $("#MainCat>li>a").click(function(e) {
        e.preventDefault();
        $(this).parent().siblings('li.active').removeClass("active"); //Find all other in the list, and remove the acive class
        $(this).parent().addClass("active"); //and add it on this one.
        var index = $(this).parent().index();
        alert(index);
        $(".subsection div ul.nav-pills").removeClass("active");
        $(".subsection div ul.nav-pills").eq(index).addClass("active");
    });


});


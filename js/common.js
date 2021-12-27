$(document).ready(function(){
    window.onscroll = function() {scrollFunction()};
    // set position navbar when scroll
    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#tool-navbar").css("top", "0px");
            $("#left-navbar").css("top", "40px");
        }
        else {
            $("#tool-navbar").css("top", "80px");
            $("#left-navbar").css("top", "120px");
        }
    }
    // tools navbar click event
    $("#clothes").click(function() {
        $("#clothes").addClass("active");
        $("#dress").removeClass("active");
        $("#shoes").removeClass("active");

        $("#navbar-text").text("CLOTHES");
    });
    $("#dress").click(function() {
        $("#dress").addClass("active");
        $("#clothes").removeClass("active");
        $("#shoes").removeClass("active");

        $("#navbar-text").text("DRESS");
    });
    $("#shoes").click(function() {
        $("#shoes").addClass("active");
        $("#clothes").removeClass("active");
        $("#dress").removeClass("active");

        $("#navbar-text").text("SHOES");
    });
});
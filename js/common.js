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
        $("#clothes").addClass("clicked");
        $("#dress").removeClass("clicked");
        $("#shoes").removeClass("clicked");

        $("#clothes-form").css("display", "block");
        $("#clothes-table").css("display", "block");
        $("#dress-form").css("display", "none");
        $("#dress-table").css("display", "none");
        $("#shoes-form").css("display", "none");
        $("#shoes-table").css("display", "none");

        $("#navbar-text").text("CLOTHES");

        $("#clothes-list-1").text("Machtwear");
        $("#clothes-list-2").text("Praticewear");
        $("#clothes-list-3").text("Home");
        $("#clothes-list-4").text("Visited");

    });
    $("#dress").click(function() {
        $("#dress").addClass("clicked");
        $("#clothes").removeClass("clicked");
        $("#shoes").removeClass("clicked");

        $("#dress-form").css("display", "block");
        $("#dress-table").css("display", "block");
        $("#clothes-form").css("display", "none");
        $("#clothes-table").css("display", "none");
        $("#shoes-form").css("display", "none");
        $("#shoes-table").css("display", "none");

        $("#navbar-text").text("DRESS");
    });
    $("#shoes").click(function() {
        $("#shoes").addClass("clicked");
        $("#clothes").removeClass("clicked");
        $("#dress").removeClass("clicked");
        $("#navbar-text").text("SHOES");

        $("#shoes-form").css("display", "block");
        $("#shoes-table").css("display", "block");
        $("#dress-form").css("display", "none");
        $("#dress-table").css("display", "none");
        $("#clothes-form").css("display", "none");
        $("#clothes-table").css("display", "none");

        $("#navbar-text").text("SHOES");
    });
});
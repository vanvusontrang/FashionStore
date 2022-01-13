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
        $("#accessories").removeClass("clicked");

        $("#clothes-form").removeClass("d-none");
        $("#clothes-table").removeClass("d-none");
        $("#dress-form").addClass("d-none");
        $("#dress-table").addClass("d-none");
        $("#shoes-form").addClass("d-none");
        $("#shoes-table").addClass("d-none");
        $("#accessories-form").addClass("d-none");
        $("#accessories-table").addClass("d-none");

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
        $("#accessories").removeClass("clicked");

        $("#dress-form").removeClass("d-none");
        $("#dress-table").removeClass("d-none");
        $("#clothes-form").addClass("d-none");
        $("#clothes-table").addClass("d-none");
        $("#shoes-form").addClass("d-none");
        $("#shoes-table").addClass("d-none");
        $("#accessories-form").addClass("d-none");
        $("#accessories-table").addClass("d-none");

        $("#navbar-text").text("DRESS");
    });
    $("#shoes").click(function() {
        $("#shoes").addClass("clicked");
        $("#clothes").removeClass("clicked");
        $("#dress").removeClass("clicked");
        $("#accessories").removeClass("clicked");

        $("#navbar-text").text("SHOES");

        $("#shoes-form").removeClass("d-none");
        $("#shoes-table").removeClass("d-none");
        $("#clothes-form").addClass("d-none");
        $("#clothes-table").addClass("d-none");
        $("#dress-form").addClass("d-none");
        $("#dress-table").addClass("d-none");
        $("#accessories-form").addClass("d-none");
        $("#accessories-table").addClass("d-none");

        $("#navbar-text").text("SHOES");
    });
    $("#accessories").click(function() {
        $("#accessories").addClass("clicked");
        $("#dress").removeClass("clicked");
        $("#clothes").removeClass("clicked");
        $("#shoes").removeClass("clicked");

        $("#accessories-form").removeClass("d-none");
        $("#accessories-table").removeClass("d-none");
        $("#clothes-form").addClass("d-none");
        $("#clothes-table").addClass("d-none");
        $("#dress-form").addClass("d-none");
        $("#dress-table").addClass("d-none");
        $("#shoes-form").addClass("d-none");
        $("#shoes-table").addClass("d-none");

        $("#navbar-text").text("CLOTHES");

        $("#clothes-list-1").text("Machtwear");
        $("#clothes-list-2").text("Praticewear");
        $("#clothes-list-3").text("Home");
        $("#clothes-list-4").text("Visited");

    });
});
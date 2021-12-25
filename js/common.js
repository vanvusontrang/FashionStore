$(document).ready(function(){
    window.onscroll = function() {scrollFunction()};
    // set position navbar when scroll
    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#tool-navbar").css("top", "0px");
            $("#left-navbar").css("top", "54px");
        }
        else {
            $("#tool-navbar").css("top", "80px");
            $("#left-navbar").css("top", "134px");
        }
    }
});
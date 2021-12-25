window.onscroll = function() {scrollFunction()};
// set position navbar when scroll
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("tool-navbar").style.top = "0px";
        document.getElementById("left-navbar").style.top = "54px";
    }
    else {
        document.getElementById("tool-navbar").style.top = "80px";
        document.getElementById("left-navbar").style.top = "134px";
    }
}
$(document).ready(function () {
    $("#potrfolio-btn").click(function(){
        $(".container-box").fadeOut(200);
        $(".portfolio-box").fadeIn(500);
    });
    $("#hide-btn").click(function(){
        $(".portfolio-box").fadeOut(200);
        $(".container-box").fadeIn(500);
    });
});

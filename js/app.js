$(document).ready(function(){
    $("#homeContent label").animate({left: '100px'}, "slow");
    $("#homeContent label").animate({left: '0px'}, "slow");

    $("#aside1Link a").hover(function() {
        $("#aside1Link").css("background-color", "lightblue")
    }, function() {
        $("#aside1Link").css("background-color", "lightgray");
    });

    $("#aside2Link a").hover(function() {
        $("#aside2Link").css("background-color", "lightblue")
    }, function() {
        $("#aside2Link").css("background-color", "lightgray");
    });

    $("#aside1LinkPhone label a").hover(function() {
        $("#aside1LinkPhone").css("background-color", "lightblue")
    }, function() {
        $("#aside1LinkPhone").css("background-color", "lightgray");
    });

    $("#aside2LinkPhone label a").hover(function() {
        $("#aside2LinkPhone").css("background-color", "lightblue")
    }, function() {
        $("#aside2LinkPhone").css("background-color", "lightgray");
    });
    
});

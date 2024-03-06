$(document).ready(function() {
    $("#btn1").click(function() {
        $('#list1').slideToggle('slow');
        $(this).text(function(i, text) {
            return text === "Hide" ? "Show" : "Hide";
        });
    });

    $("#welcomeBtn").click(function() {
        var greeting = $("#greeting");
        greeting.css('visibility', 'visible');
        var screenWidth = $(window).width();

        greeting.animate({
            left: screenWidth // Move to right across the screen
        }, 2000, function() { // 2000 is the duration of the animation
            // This function now correctly targets the greeting for fading out
            greeting.css('opacity', '0'); // Fade out the greeting
            // Optionally hide the "Bienvenue" button after the greeting animation
            // $("#welcomeBtn").fadeOut('slow'); // Hide the "Bienvenue" button
        });
    });
});

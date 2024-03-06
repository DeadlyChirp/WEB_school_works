
$(document).ready (function () {

    var counter = 0;

    $('#interactive-block').mouseover(function () {
        console.log("You are now entering the danger zone.");
    }).mouseleave(function () {
        console.log("You are now leaving the danger zone.");
    }).mousedown(function () {
        $(this).css("background-color", "green");
        counter++;
        $('header').append('<span style="color: green;"> Up ' + counter + '</span>');
    }).mouseup(function () {
        $(this).css("background-color", "red");
        counter++;
        $('footer').append('<span style="color: red;"> Down ' + counter + '</span>');
    });

    // Function to update the central block message
    function updateMessage() {
        var upCount = $('header span:visible').length; // Number of visible spans in the header
        var downCount = $('footer span:visible').length; // Number of visible spans in the footer
        $('#interactive-block').text('Décompte (' + upCount + ',' + downCount + ')'); // count the number of spans in the header and footer
    }
    updateMessage();

    $('body').on('click','header span, footer span', function () {
        $(this).hide();
        updateMessage();
    });
});
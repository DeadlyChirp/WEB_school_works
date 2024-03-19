$(document).ready(function () {
    let counterUP = 0;
    let counterDOWN = 0;
    let interactiveBlock = $('#interactive-block');
    let header = $('header');
    let footer = $('footer');

    interactiveBlock.mouseover(function () {
        console.log("attention, you are entering a danger zone");
    }).mouseleave(function () {
        console.log("ahhhh heh ez");
    }).mousedown(function () {
        counterUP++;
        $(this).css("background-color", "green");
        header.append('<span style="color: green;"> Up ' + counterUP + '</span>');
        updateMessage();
    }).mouseup(function () {
        counterDOWN++;
        $(this).css("background-color", "red");
        footer.append('<span style="color: red;"> Down ' + counterDOWN + ' </span>');
        updateMessage();
    });

    function updateMessage() {
        interactiveBlock.text('Decompte (' + counterUP + ',' + counterDOWN + ')');
    }
    updateMessage();


    function updateMsg(){
        var upCount = $('header span:visible').length; // Number of visible spans in the header
        var downCount = $('footer span:visible').length;
        $('#interactive-block').text('Décompte (' + upCount + ',' + downCount + ')');
    }
    updateMsg();

    $('body').on('click', 'header span, footer span', function () {
        $(this).hide();
        updateMessage();
        updateMsg()
    });
});
$(document).ready (function () {
    $('#interactive-block').mouseover(function (){
        console.log("attention, you are entering a danger zone");
    }).mouseleave(function (){
        console.log("ahhhh heh ez");
    });
});
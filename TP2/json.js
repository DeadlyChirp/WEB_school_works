$(document).ready (function () {
    $('p').mouseenter(function () {
        $(this).text("Ceci n'est pas un paragraphe");
    }).mouseleave(function () {
        $(this).text("Ceci est un paragraphe");
    });
});
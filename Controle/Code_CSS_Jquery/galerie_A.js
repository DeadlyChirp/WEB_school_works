$(document).ready(function() {
    // Gestionnaire d'événement pour lorsque l'on presse le bouton de la souris
    $("#container img").on("mousedown", function() {
        // Agrandit l'image cliquée à 75% de la largeur de l'écran et ajuste la hauteur proportionnellement
        $(this).animate({
            width: "75%",
            height: "56.25%" // Exemple de hauteur basée sur un ratio 16:9 par rapport à la largeur
        }, 500); // 500 millisecondes pour la transition

        // Réduit l'autre image à 25% de la largeur de l'écran et ajuste la hauteur proportionnellement
        $("#container img").not(this).animate({
            width: "25%",
            height: "18.75%" // Ajustement de la hauteur proportionnellement
        }, 500); // 500 millisecondes pour la transition
    });

    // Gestionnaire d'événement pour lorsque l'on relâche le bouton de la souris
    $("#container img").on("mouseup", function() {
        // Retourne toutes les images à leur taille originale
        $("#container img").animate({
            width: "50%",
            height: "auto" // La hauteur s'ajuste automatiquement pour maintenir le ratio d'aspect
        }, 500); // 500 millisecondes pour la transition
    });
});

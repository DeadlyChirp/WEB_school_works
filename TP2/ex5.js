$(document).ready(function() {
    var images = $('#defile img').hide(); // Select and hide all images
    var i = 0; // Counter. Start at 0 with the first image
    images.eq(i).show(); // Show the first image

    // Function to show the next image
    // $('#next').click(function() {
    //     images.eq(i).hide(); // Hide the current image
    //     i = i+1 % images.length; // Move to the next image, looping back to the first if necessary by using the modulo operator
    //     //images.length is the number of images
    //     images.eq(i).show(); // Show the next image
    // });


    //C Masquer le bouton. Utiliser la fonction setInterval de JavaScript pour faire défiler automatique
    // ment les images toutes les 3 secondes.
    // function shownextImage(){
    //     images.eq(i).hide(); // Hide the current image
    //     i = (i+1) % images.length; // Move to the next image, looping back to the first if necessary by using the modulo operator
    //     //images.length is the number of images
    //     images.eq(i).show(); // Show the next image
    // }
    //
    // setInterval(shownextImage,3000);
    // $('#next').click(shownextImage);

    function showNextImage() {
        // Fade out current image
        images.eq(i).fadeOut('slow', function() {
            // Increment index and wrap around if needed
            i = (i + 1) % images.length;
            // Fade in next image
            images.eq(i).fadeIn('slow');
        });
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
    $('#next').click(showNextImage); // Change image when button is clicked
});

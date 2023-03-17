$(document).ready(function() {
    // When the document is ready, add a click event listener to the paragraph
    $('#my-paragraph').click(function () {
        // When the paragraph is clicked, animate the font size to 24px over 1 second
        $(this).animate({fontSize: '100px'}, 5000);
        $('#my-image').click(function () {
            // When the image is clicked, spin it 10 times using CSS animations
            $(this).css('animation', 'spin 2s linear 10');
        });
    });

});


// $(document).ready(function() {
//     // When the document is ready, add a click event listener to the image
//     $('#my-image').click(function() {
//         // When the image is clicked, break it apart using the explode effect
//         $(this).effect('explode', {duration: 8000});
//     });
// });





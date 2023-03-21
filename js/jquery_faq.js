$( "dd" ).addClass( "invisible" );


$('button').on('click', function(){
    $('dd').toggleClass('invisible')
})


$(document).ready(function() {
    $('#yellow-background-button').click(function() {
        $('ul li:last-child').css('background-color', 'yellow');
    });
});

$(document).ready(function() {
    $('h3').click(function() {
        $(this).nextUntil('h3').css('font-weight', 'bold');
    });
});

$(document).ready(function() {
    $('li').click(function() {
        const parentUl = $(this).parent('ul');
        parentUl.find('li:first-child').css('color', 'blue');
    });
});

// jQuery code to handle the button clicks and image swapping
$(document).ready(function() {
    $('.swap-left').click(function() {
        // Save the left image src to a variable
        let leftImgSrc = $('#left-img').attr('src');
        // Set the left image src to the middle image src
        $('#left-img').attr('src', $('#middle-img').attr('src'));
        // Set the middle image src to the saved left image src
        $('#middle-img').attr('src', leftImgSrc);
    });

    $('.swap-right').click(function() {
        // Save the right image src to a variable
        let rightImgSrc = $('#right-img').attr('src');
        // Set the right image src to the middle image src
        $('#right-img').attr('src', $('#middle-img').attr('src'));
        // Set the middle image src to the saved right image src
        $('#middle-img').attr('src', rightImgSrc);
    });

    $('.swap-random').click(function() {
        // Generate a random number between 0 and 1
        let randomNum = Math.floor(Math.random() * 2);
        if (randomNum === 0) {
            // If the random number is 0, swap the middle image with the left image
            let leftImgSrc = $('#left-img').attr('src');
            $('#left-img').attr('src', $('#middle-img').attr('src'));
            $('#middle-img').attr('src', leftImgSrc);
        } else {
            // If the random number is 1, swap the middle image with the right image
            let rightImgSrc = $('#right-img').attr('src');
            $('#right-img').attr('src', $('#middle-img').attr('src'));
            $('#middle-img').attr('src', rightImgSrc);
        }
    });
});

// $(document).ready(function() {
//     $('.swap-left').click(function() {
//         // Save the left image src to a variable
//         let leftImgSrc = $(this).parent().prev().find('img').attr('src');
//         // Set the left image src to the middle image src
//         $(this).parent().prev().find('img').attr('src', $(this).parent().next().find('img').attr('src'));
//         // Set the middle image src to the saved left image src
//         $(this).parent().next().find('img').attr('src', leftImgSrc);
//     });
//
//     $('.swap-right').click(function() {
//         // Save the right image src to a variable
//         let rightImgSrc = $(this).parent().next().find('img').attr('src');
//         // Set the right image src to the middle image src
//         $(this).parent().next().find('img').attr('src', $(this).parent().prev().find('img').attr('src'));
//         // Set the middle image src to the saved right image src
//         $(this).parent().prev().find('img').attr('src', rightImgSrc);
//     });
//
//     $('.swap-random').click(function() {
//         // Generate a random number between 0 and 1
//         let randomNum = Math.floor(Math.random() * 2);
//         if (randomNum === 0) {
//             // If the random number is 0, swap the middle image with the left image
//             let leftImgSrc = $(this).parent().prev().find('img').attr('src');
//             $(this).parent().prev().find('img').attr('src', $(this).parent().next().find('img').attr('src'));
//             $(this).parent().next().find('img').attr('src', leftImgSrc);
//         } else {
//             // If the random number is 1, swap the middle image with the right image
//             let rightImgSrc = $(this).parent().next().find('img').attr('src');
//             $(this).parent().next().find('img').attr('src', $(this).parent().prev().find('img').attr('src'));
//             $(this).parent().prev().find('img').attr('src', rightImgSrc);
//         }
//     });
// });


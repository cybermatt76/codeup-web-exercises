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
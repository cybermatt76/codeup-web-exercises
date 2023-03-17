$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', 'red');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
    let audioElement = $("#my-audio")[0];
    $("#play-pause-sound").click(function () {
        if (audioElement.paused) {
            audioElement.play();
            $(this).text("Pause Sound");
        } else {
            audioElement.pause();
            $(this).text("Play Sound");
        }
    });
    let audioElement2 = $("#my-audio2")[0];
    $("#play-pause-sound2").click(function () {
        if (audioElement2.paused) {
            audioElement2.play();
            $(this).text("Pause Sound");
        } else {
            audioElement2.pause();
            $(this).text("Play Sound");
        }
    });
});
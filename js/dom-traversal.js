$('.box').on('click', function(){
    //hide the boxes in the other container
    $(this).parents('.container').siblings('.container').find('.box').fadeOut();
})
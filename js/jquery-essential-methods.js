//jquery selector
let $jQueryParent = $('#paragraphParant');
//I cannot do THIS!
//jQueryParent.style.color = 'red'

//vanilla JavaScript equivalent

document.querySelector('#paragraphParant')

$jQueryParent.css('color', 'red');

// $jQueryParent.css({
//     'fontweight': '600',
//     'textTransform': 'uppercase',
//     'fontstyle': 'italic'
// });
//
// $jQueryParent.addClass('highlight');

let $paragraphs = $('p');

$paragraphs.css('color', 'blue');

//vanilla javascript
let paragraphs = document.querySelectorAll('p');
-paragraphs.forEach(function (element){
    element.style.color = 'blue';

    element.setAttribute('data-name', 'value');
    let paragraphValue = element.getAttribute('data-name');
});

$paragraphs.attr('data-name2', 'really anything');
let newParaValue = $paragraphs.attr('data-name2');

$paragraphs.text('This is the new text inside this element!')

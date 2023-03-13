let clickMe = document.querySelector('#clickMe')
let allButtons = document.querySelectorAll('.btn')
let pageWrapper = document.querySelector('.page-wrapper')

let btnColumn = document.querySelector('#btn-column')


clickMe.addEventListener('click', function() {
    pageWrapper.classList.toggle( 'red');
});

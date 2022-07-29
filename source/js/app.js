var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.btn-js');
var popupCls = document.querySelector('.popup-close');
var input = popup.querySelector('input');

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-open');
    input.focus();
})

popupCls.addEventListener('click', function() {
    popup.classList.remove('popup-open');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape") {
        popup.classList.remove('popup-open')
        popupBtn.focus();
    }    
})
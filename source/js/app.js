var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.btn_js');
var popupCls = document.querySelector('.popup__close');
var input = popup.querySelector('input');

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup__open');
    input.focus();
})

popupCls.addEventListener('click', function() {
    popup.classList.remove('popup__open');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape") {
        popup.classList.remove('popup__open')
        popupBtn.focus();
    }    
})
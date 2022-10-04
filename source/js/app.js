var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.btn_js');
var popupCls = document.querySelector('.popup__close');
var input = popup.querySelector('input');

var mobileBurger = document.querySelector('.humburger');
var mobileCls = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');

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

mobileBurger.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header__open');
})

mobileCls.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-header__open');
})
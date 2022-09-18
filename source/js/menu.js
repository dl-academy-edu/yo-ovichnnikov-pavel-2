var mobileBurger = document.querySelector('.humburger');
var mobileCls = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');

mobileBurger.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header__open');
})

mobileCls.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-header__open');
})

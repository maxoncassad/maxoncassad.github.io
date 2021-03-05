$(document).ready(function() {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP(function (support) {
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 30) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    });
    $(".burger").click(function(){
        $(this).toggleClass("active");
        $(".header__menu").toggleClass("active");
        $("body").toggleClass("active");
    });
    $(".intro__btn").hover(function(){
        $(".intro__btn.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".intro__video-img").click(function(){
        $(this).addClass("active");
    });
    $(".services__row").click(function(){
        $(".services__row.active").removeClass("active");
        $(this).addClass("active");
    });
});
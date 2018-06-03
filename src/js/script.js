$(document).on('click', 'a[href^="#"]','#toTopButton' , function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(document).ready(function(){
    $('*[data-animate]').addClass('hide').each(function(){
  $(this).viewportChecker({
    classToAdd: 'show animated ' + $(this).data('animate'),
    classToRemove: 'hide',
    offset: '20%',
  });
});
});
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        var page = pageYOffset;
        if (page > 10) {
            nav.classList.add('nav__border');
        } else {
            nav.classList.remove('nav__border');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu"),
        menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function () {

        if (menu.className == "nav__ul") {
            menu.classList.add('nav__ul--responsive');
            this.firstChild.alt = "hide menu";
        } else {
            menu.classList.add('nav__ul--hide');
            setTimeout(function () {
                menu.classList.remove('nav__ul--responsive');
                menu.classList.remove('nav__ul--hide');
            }, 600);
            this.firstChild.alt = "show menu";
        }
    });
});
$(document).ready(function ($) {
    $('.nav__link').on('click', function () {
        $(".nav__button").trigger('click');
    });
});

    window.onscroll = function () {
        var toTopButton = document.getElementById('toTopButton');
        var yScrollA = window.pageYOffset;

        if (yScrollA > 450) {
            toTopButton.style.display = 'flex';
        } else {
            toTopButton.style.display = 'none';
        }
    };

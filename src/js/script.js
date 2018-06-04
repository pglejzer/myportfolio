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

$(document).ready(function(){
    $('.about__button').click(function(){
        $(".about__p--display").slideToggle(300,'swing');
    });
});
$(document).ready(function(){
    $('.about__button--second').click(function(){
        $(".about__p--second").slideToggle(300,'swing');
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
        var hideShowButton = document.getElementById('about__button');;

        if (hideShowButton == '450') {
            toTopButton.style.display = 'flex';
        } else {
            toTopButton.style.display = 'none';
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("about__button");
        var displayP = document.getElementsByClassName("about__p--display");
        button.addEventListener('click', function () {
    
            if (menu.className == displayP) {
                displayP.style.display ='block';
            } else {
                displayP.style.display = 'none';
            }
        });
    });
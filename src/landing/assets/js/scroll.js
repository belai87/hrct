
$(document).on('click', '.js-anchor', function(event){
    event.preventDefault();
    let anchor = $(this).data('anchor'),
        ANCHOR_BOX = document.querySelector(`#${anchor}`),
        menu = $('.menu__mobile'),
        body = $('body');
        // let userAgent = navigator.platform;
        //let browser = get_name_browser();

    $('.menu__item_active').removeClass('menu__item_active');
    $(this).addClass('menu__item_active');
    $(menu).removeClass('menu__mobile_active');

    /*if(ANCHOR_BOX){
        if(browser === 'Safari'){
            window.scrollTo(0, ANCHOR_BOX.offsetTop - 120);
        } else {
            window.scrollTo({
                top: ANCHOR_BOX.offsetTop - 120,
                behavior: "smooth"
            });
        }
    } else {
        console.error('Такого section c id не существует: ', anchor)
    }*/

    $('html, body').animate({
        scrollTop: $(ANCHOR_BOX).offset().top - 120
    }, {
        duration: 300,
        easing: "linear"
    });


    $(body).removeClass('hidden');
});

document.addEventListener("scroll", function(){
    let top = window.pageYOffset || document.documentElement.scrollTop,
        header = $('header');
    if(top > 80){
        $(header).addClass('header_active');
    }else{
        $(header).removeClass('header_active');
    }
}, false);

/*
function get_name_browser(){
    let ua = navigator.userAgent;

    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';

    return 'Не определен';
}*/
